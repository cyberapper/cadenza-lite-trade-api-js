// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import CadenzaClient from 'cadenza-client-sdk';
import { Response } from 'node-fetch';

const cadenzaClient = new CadenzaClient({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource exchangeAccounts', () => {
  test('create: only required params', async () => {
    const responsePromise = cadenzaClient.exchangeAccounts.create({
      apiKey: 'my_api_key',
      apiSecret: 'my_api_secret',
      environment: 0,
      exchangeAccountName: 'my_exchange',
      exchangeType: 'BINANCE',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await cadenzaClient.exchangeAccounts.create({
      apiKey: 'my_api_key',
      apiSecret: 'my_api_secret',
      environment: 0,
      exchangeAccountName: 'my_exchange',
      exchangeType: 'BINANCE',
    });
  });

  test('update: only required params', async () => {
    const responsePromise = cadenzaClient.exchangeAccounts.update({
      exchangeAccountId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await cadenzaClient.exchangeAccounts.update({
      exchangeAccountId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      apiKey: 'my_api_key',
      apiSecret: 'my_api_secret',
      exchangeAccountName: 'my_exchange',
    });
  });

  test('list', async () => {
    const responsePromise = cadenzaClient.exchangeAccounts.list();
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
    await expect(cadenzaClient.exchangeAccounts.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      CadenzaClient.NotFoundError,
    );
  });

  test('remove: only required params', async () => {
    const responsePromise = cadenzaClient.exchangeAccounts.remove({
      exchangeAccountId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('remove: required and optional params', async () => {
    const response = await cadenzaClient.exchangeAccounts.remove({
      exchangeAccountId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  test('setExchangePriority: only required params', async () => {
    const responsePromise = cadenzaClient.exchangeAccounts.setExchangePriority({
      priority: ['my_exchange_1', 'my_exchange_2', 'my_exchange_3'],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('setExchangePriority: required and optional params', async () => {
    const response = await cadenzaClient.exchangeAccounts.setExchangePriority({
      priority: ['my_exchange_1', 'my_exchange_2', 'my_exchange_3'],
    });
  });
});
