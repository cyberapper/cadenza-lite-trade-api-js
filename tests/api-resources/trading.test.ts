// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import CadenzaClient from 'cadenza-client-sdk';
import { Response } from 'node-fetch';

const cadenzaClient = new CadenzaClient({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource trading', () => {
  test('cancelOrder: only required params', async () => {
    const responsePromise = cadenzaClient.trading.cancelOrder({ orderId: 'string' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('cancelOrder: required and optional params', async () => {
    const response = await cadenzaClient.trading.cancelOrder({ orderId: 'string' });
  });

  test('fetchQuotes: only required params', async () => {
    const responsePromise = cadenzaClient.trading.fetchQuotes({
      baseCurrency: 'string',
      orderSide: 'string',
      quoteCurrency: 'string',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('fetchQuotes: required and optional params', async () => {
    const response = await cadenzaClient.trading.fetchQuotes({
      baseCurrency: 'string',
      orderSide: 'string',
      quoteCurrency: 'string',
      exchangeAccountId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      quantity: 0,
      quoteQuantity: 0,
    });
  });

  test('getQuoteExecutionReport: only required params', async () => {
    const responsePromise = cadenzaClient.trading.getQuoteExecutionReport({ quoteRequestId: 'string' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getQuoteExecutionReport: required and optional params', async () => {
    const response = await cadenzaClient.trading.getQuoteExecutionReport({ quoteRequestId: 'string' });
  });

  test('listOrders', async () => {
    const responsePromise = cadenzaClient.trading.listOrders();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('listOrders: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(cadenzaClient.trading.listOrders({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      CadenzaClient.NotFoundError,
    );
  });

  test('listOrders: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cadenzaClient.trading.listOrders(
        {
          endTime: 1632933600000,
          exchangeAccountId: 'string',
          limit: 100,
          offset: 0,
          orderId: 'string',
          orderStatus: 'SUBMITTED',
          startTime: 1622505600000,
          symbol: 'string',
          tenantId: 'string',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(CadenzaClient.NotFoundError);
  });

  test('placeOrder', async () => {
    const responsePromise = cadenzaClient.trading.placeOrder();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('placeOrder: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(cadenzaClient.trading.placeOrder({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      CadenzaClient.NotFoundError,
    );
  });

  test('placeOrder: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cadenzaClient.trading.placeOrder(
        {
          exchangeAccountId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          leverage: 0,
          orderSide: 'BUY',
          orderType: 'MARKET',
          positionId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          price: 0,
          priceSlippageTolerance: 0,
          priority: ['exchange_account_id_1', 'exchange_account_id_2', 'exchange_account_id_3'],
          quantity: 0,
          quoteId: 'string',
          quoteQuantity: 0,
          quoteRequestId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          routePolicy: 'PRIORITY',
          symbol: 'BTC/USDT',
          tenantId: 'tenantId',
          timeInForce: 'DAY',
          'Idempotency-Key': 'my_idempotency_key',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(CadenzaClient.NotFoundError);
  });
});
