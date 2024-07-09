// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import CadenzaClient from 'cadenza-sdk';
import { Response } from 'node-fetch';

const cadenzaClient = new CadenzaClient({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource order', () => {
  test('create', async () => {
    const responsePromise = cadenzaClient.trading.order.create();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(cadenzaClient.trading.order.create({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      CadenzaClient.NotFoundError,
    );
  });

  test('create: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cadenzaClient.trading.order.create(
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

  test('list', async () => {
    const responsePromise = cadenzaClient.trading.order.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(cadenzaClient.trading.order.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      CadenzaClient.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cadenzaClient.trading.order.list(
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

  test('cancel: only required params', async () => {
    const responsePromise = cadenzaClient.trading.order.cancel({ orderId: 'string' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('cancel: required and optional params', async () => {
    const response = await cadenzaClient.trading.order.cancel({ orderId: 'string' });
  });
});
