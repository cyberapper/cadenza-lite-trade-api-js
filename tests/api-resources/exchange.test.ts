// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import CadenzaClientSdk from 'cadenza-client-sdk';
import { Response } from 'node-fetch';

const cadenzaClientSdk = new CadenzaClientSdk({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource exchange', () => {
  test('setExchangePriority: only required params', async () => {
    const responsePromise = cadenzaClientSdk.exchange.setExchangePriority({
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
    const response = await cadenzaClientSdk.exchange.setExchangePriority({
      priority: ['my_exchange_1', 'my_exchange_2', 'my_exchange_3'],
    });
  });
});
