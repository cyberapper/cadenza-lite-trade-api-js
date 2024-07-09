// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import CadenzaClient from 'cadenza-sdk';
import { Response } from 'node-fetch';

const cadenzaClient = new CadenzaClient({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource quote', () => {
  test('requestForQuote: only required params', async () => {
    const responsePromise = cadenzaClient.trading.quote.requestForQuote({
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

  test('requestForQuote: required and optional params', async () => {
    const response = await cadenzaClient.trading.quote.requestForQuote({
      baseCurrency: 'string',
      orderSide: 'string',
      quoteCurrency: 'string',
      exchangeAccountId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      quantity: 0,
      quoteQuantity: 0,
    });
  });
});
