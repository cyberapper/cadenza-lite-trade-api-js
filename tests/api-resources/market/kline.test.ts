// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import CadenzaClient from 'cadenza-sdk';
import { Response } from 'node-fetch';

const cadenzaClient = new CadenzaClient({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource kline', () => {
  test('get: only required params', async () => {
    const responsePromise = cadenzaClient.market.kline.get({
      exchangeType: 'BINANCE',
      interval: '1s',
      symbol: 'BTC/USDT',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: required and optional params', async () => {
    const response = await cadenzaClient.market.kline.get({
      exchangeType: 'BINANCE',
      interval: '1s',
      symbol: 'BTC/USDT',
      endTime: 1632933600000,
      limit: 100,
      startTime: 1622505600000,
    });
  });
});
