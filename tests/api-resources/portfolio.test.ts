// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import CadenzaClientSdk from 'cadenza-client-sdk';
import { Response } from 'node-fetch';

const cadenzaClientSdk = new CadenzaClientSdk({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource portfolio', () => {
  test('listBalances', async () => {
    const responsePromise = cadenzaClientSdk.portfolio.listBalances();
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
    await expect(
      cadenzaClientSdk.portfolio.listBalances({ path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(CadenzaClientSdk.NotFoundError);
  });

  test('listBalances: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cadenzaClientSdk.portfolio.listBalances(
        { exchangeAccountId: 'string', hideEmptyValue: true },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(CadenzaClientSdk.NotFoundError);
  });

  test('listCredit', async () => {
    const responsePromise = cadenzaClientSdk.portfolio.listCredit();
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
    await expect(cadenzaClientSdk.portfolio.listCredit({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      CadenzaClientSdk.NotFoundError,
    );
  });

  test('listCredit: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cadenzaClientSdk.portfolio.listCredit(
        { exchangeAccountId: 'string', hideEmptyValue: true },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(CadenzaClientSdk.NotFoundError);
  });

  test('listPositions', async () => {
    const responsePromise = cadenzaClientSdk.portfolio.listPositions();
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
    await expect(
      cadenzaClientSdk.portfolio.listPositions({ path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(CadenzaClientSdk.NotFoundError);
  });

  test('listPositions: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      cadenzaClientSdk.portfolio.listPositions(
        { exchangeAccountId: 'string', hideEmptyValue: true },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(CadenzaClientSdk.NotFoundError);
  });
});
