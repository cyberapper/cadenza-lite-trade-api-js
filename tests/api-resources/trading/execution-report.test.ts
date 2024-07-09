// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import CadenzaClient from 'cadenza-sdk';
import { Response } from 'node-fetch';

const cadenzaClient = new CadenzaClient({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource executionReport', () => {
  test('getQuoteExecutionReport: only required params', async () => {
    const responsePromise = cadenzaClient.trading.executionReport.getQuoteExecutionReport({
      quoteRequestId: 'string',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('getQuoteExecutionReport: required and optional params', async () => {
    const response = await cadenzaClient.trading.executionReport.getQuoteExecutionReport({
      quoteRequestId: 'string',
    });
  });
});
