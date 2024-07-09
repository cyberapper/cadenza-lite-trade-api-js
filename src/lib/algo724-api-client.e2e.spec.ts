import { expect, test } from 'bun:test';
import { Algo724Client } from './algo724-api-client';
import pino from 'pino';
import EventEmitter from 'events';
import { getServiceAccountJwt } from './algo724-api-config';
const logger = pino();

var accessToken = await getServiceAccountJwt('the path');
const algo724Client = new Algo724Client(accessToken);
test('should be able to getInfo', async () => {
  const ping = await algo724Client.client.GET('/api/v2/client/getInfo');
  expect(ping.response.status).toBe(200);
});

test('should be able to get balances', async () => {
  const balances = await algo724Client.client.GET('/api/v2/portfolio/listBalances');
  expect(balances.response.status).toBe(200);
  logger.info(balances.data);
});

test(`should be able to get basic quotes`, async () => {
  const trade = await algo724Client.client.POST('/api/v2/trading/fetchQuotes', {
    body: {
      orderSide: 'BUY',
      quantity: 100,
      quoteCurrency: 'USDT',
      baseCurrency: 'BTC',
    },
  });
  expect(trade.response.status).toBe(200);
  logger.info({
    quotes: trade.data,
  });
});

test('should be able to get quotes priced for different quantities and order sides', async () => {
  const trade = await algo724Client.client.POST('/api/v2/trading/fetchQuotes', {
    body: {
      orderSide: 'BUY',
      quantity: 0.00001,
      quoteCurrency: 'USDT',
      baseCurrency: 'BTC',
    },
  });
  expect(trade.response.status).toBe(200);
  logger.info({
    quotes: trade.data,
  });

  const trade2 = await algo724Client.client.POST('/api/v2/trading/fetchQuotes', {
    body: {
      orderSide: 'BUY',
      quantity: 500,
      quoteCurrency: 'USDT',
      baseCurrency: 'BTC',
    },
  });
  expect(trade2.response.status).toBe(200);
  logger.info({
    quotes: trade2.data,
  });

  const trade3 = await algo724Client.client.POST('/api/v2/trading/fetchQuotes', {
    body: {
      orderSide: 'BUY',
      quantity: 50000,
      quoteCurrency: 'USDT',
      baseCurrency: 'BTC',
    },
  });
  expect(trade3.response.status).toBe(200);
  logger.info({
    quotes: trade3.data,
  });
  console.table({
    trade1: trade.data![0].askPrice,
    trade2: trade2.data![0].askPrice,
    trade3: trade3.data![0].askPrice,
  });
});

test(`Quote and execute 1 trades at the same time`, async () => {
  const eventEmitter = new EventEmitter();

  eventEmitter.on('quote', async (o) => {
    const quote = await algo724Client.client.POST('/api/v2/trading/fetchQuotes', {
      body: {
        orderSide: 'BUY',
        quantity: o.quantity,
        quoteCurrency: o.quoteCurrency,
        baseCurrency: o.baseCurrency,
      },
    });
    logger.info({ quote: quote });
    eventEmitter.emit('executeTrade', quote.data![0]);
  });

  eventEmitter.on('executeTrade', async (quote) => {
    logger.info(
      {
        orderCandidates: quote.orderCandidates,
      },
      'Executing trade',
    );
    await algo724Client.client.POST('/api/v2/trading/placeOrder', {
      body: {
        orderType: quote.orderCandidates[0].orderType,
        timeInForce: 'GTC',
        exchangeAccountId: quote.orderCandidates[0].exchangeAccountId,
        orderSide: quote.orderCandidates[0].orderSide,
        quantity: quote.orderCandidates[0].quantity,
        symbol: quote.orderCandidates[0].symbol,
      },
    });
  });

  // generate a list of 100 random quantities rangning from 0.001 to 5
  const quantities = Array.from({ length: 1 }, () => Math.random() * 5 + 0.001);
  // randomly choose between BTC, ADA, ETH, DOGE
  // randomly choose between USDT, USD
  // generate 1000 orders
  for (let i = 0; i < 1; i++) {
    const baseCurrency =
      Math.random() < 0.25 ? 'BTC'
      : Math.random() < 0.5 ? 'ADA'
      : Math.random() < 0.75 ? 'ETH'
      : 'DOGE';
    const quantity = quantities[Math.floor(Math.random() * quantities.length)];
    const quoteCurrency = Math.random() < 0.5 ? 'USDT' : 'USD';
    eventEmitter.emit('quote', {
      quantity,
      quoteCurrency,
      baseCurrency,
    });
  }
});
