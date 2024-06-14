// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import CadenzaClient from 'cadenza-client-sdk';
import { Response } from 'node-fetch';

const cadenzaClient = new CadenzaClient({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource portfolio', () => {
  test('listBalances', async () => {
    const responsePromise = cadenzaClient.portfolio.listBalances();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('listBalances: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(cadenzaClient.portfolio.listBalances({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      CadenzaClient.NotFoundError,
    );
  });

  test('listBalances: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cadenzaClient.portfolio.listBalances(
        { exchangeAccountId: 'string', hideEmptyValue: true },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(CadenzaClient.NotFoundError);
  });

  test('listCredit', async () => {
    const responsePromise = cadenzaClient.portfolio.listCredit();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('listCredit: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(cadenzaClient.portfolio.listCredit({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      CadenzaClient.NotFoundError,
    );
  });

  test('listCredit: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cadenzaClient.portfolio.listCredit(
        { exchangeAccountId: 'string', hideEmptyValue: true },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(CadenzaClient.NotFoundError);
  });

  test('listPositions', async () => {
    const responsePromise = cadenzaClient.portfolio.listPositions();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('listPositions: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(cadenzaClient.portfolio.listPositions({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      CadenzaClient.NotFoundError,
    );
  });

  test('listPositions: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cadenzaClient.portfolio.listPositions(
        { exchangeAccountId: 'string', hideEmptyValue: true },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(CadenzaClient.NotFoundError);
  });
});
