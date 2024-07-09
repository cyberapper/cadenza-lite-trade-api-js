// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Errors from './error';
import * as Uploads from './uploads';
import { type Agent } from './_shims/index';
import * as Core from './core';
import * as Pagination from './pagination';
import * as API from './resources/index';

const environments = {
  prod: 'https://cadenza-lite.algo724.com',
  uat: 'https://cadenza-lite.uat.algo724.com',
};
type Environment = keyof typeof environments;

export interface ClientOptions {
  /**
   * Defaults to process.env['CADENZA_CLIENT_SDK_BEARER_TOKEN'].
   */
  bearerToken?: string | undefined;

  /**
   * Specifies the environment to use for the API.
   *
   * Each environment maps to a different base URL:
   * - `prod` corresponds to `https://cadenza-lite.algo724.com`
   * - `uat` corresponds to `https://cadenza-lite.uat.algo724.com`
   */
  environment?: Environment;

  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env['CADENZA_CLIENT_BASE_URL'].
   */
  baseURL?: string | null | undefined;

  /**
   * The maximum amount of time (in milliseconds) that the client should wait for a response
   * from the server before timing out a single request.
   *
   * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
   * much longer than this timeout before the promise succeeds or fails.
   */
  timeout?: number;

  /**
   * An HTTP agent used to manage HTTP(S) connections.
   *
   * If not provided, an agent will be constructed by default in the Node.js environment,
   * otherwise no agent is used.
   */
  httpAgent?: Agent;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we use `node-fetch` on Node.js and otherwise expect that `fetch` is
   * defined globally.
   */
  fetch?: Core.Fetch | undefined;

  /**
   * The maximum number of times that the client will retry a request in case of a
   * temporary failure, like a network error or a 5XX error from the server.
   *
   * @default 2
   */
  maxRetries?: number;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `undefined` or `null` in request options.
   */
  defaultHeaders?: Core.Headers;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Core.DefaultQuery;
}

/**
 * API Client for interfacing with the Cadenza Client API.
 */
export class CadenzaClient extends Core.APIClient {
  bearerToken: string;

  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Cadenza Client API.
   *
   * @param {string | undefined} [opts.bearerToken=process.env['CADENZA_CLIENT_SDK_BEARER_TOKEN'] ?? undefined]
   * @param {Environment} [opts.environment=prod] - Specifies the environment URL to use for the API.
   * @param {string} [opts.baseURL=process.env['CADENZA_CLIENT_BASE_URL'] ?? https://cadenza-lite.algo724.com] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
   * @param {Core.Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {Core.Headers} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Core.DefaultQuery} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({
    baseURL = Core.readEnv('CADENZA_CLIENT_BASE_URL'),
    bearerToken = Core.readEnv('CADENZA_CLIENT_SDK_BEARER_TOKEN'),
    ...opts
  }: ClientOptions = {}) {
    if (bearerToken === undefined) {
      throw new Errors.CadenzaClientError(
        "The CADENZA_CLIENT_SDK_BEARER_TOKEN environment variable is missing or empty; either provide it, or instantiate the CadenzaClient client with an bearerToken option, like new CadenzaClient({ bearerToken: 'My Bearer Token' }).",
      );
    }

    const options: ClientOptions = {
      bearerToken,
      ...opts,
      baseURL,
      environment: opts.environment ?? 'prod',
    };

    if (baseURL && opts.environment) {
      throw new Errors.CadenzaClientError(
        'Ambiguous URL; The `baseURL` option (or CADENZA_CLIENT_BASE_URL env var) and the `environment` option are given. If you want to use the environment you must pass baseURL: null',
      );
    }

    super({
      baseURL: options.baseURL || environments[options.environment || 'prod'],
      timeout: options.timeout ?? 60000 /* 1 minute */,
      httpAgent: options.httpAgent,
      maxRetries: options.maxRetries,
      fetch: options.fetch,
    });

    this._options = options;

    this.bearerToken = bearerToken;
  }

  health: API.Health = new API.Health(this);
  clients: API.Clients = new API.Clients(this);
  exchangeAccounts: API.ExchangeAccounts = new API.ExchangeAccounts(this);
  market: API.Market = new API.Market(this);
  trading: API.Trading = new API.Trading(this);
  portfolio: API.Portfolio = new API.Portfolio(this);

  protected override defaultQuery(): Core.DefaultQuery | undefined {
    return this._options.defaultQuery;
  }

  protected override defaultHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return {
      ...super.defaultHeaders(opts),
      ...this._options.defaultHeaders,
    };
  }

  protected override authHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return { Authorization: `Bearer ${this.bearerToken}` };
  }

  static CadenzaClient = this;

  static CadenzaClientError = Errors.CadenzaClientError;
  static APIError = Errors.APIError;
  static APIConnectionError = Errors.APIConnectionError;
  static APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
  static APIUserAbortError = Errors.APIUserAbortError;
  static NotFoundError = Errors.NotFoundError;
  static ConflictError = Errors.ConflictError;
  static RateLimitError = Errors.RateLimitError;
  static BadRequestError = Errors.BadRequestError;
  static AuthenticationError = Errors.AuthenticationError;
  static InternalServerError = Errors.InternalServerError;
  static PermissionDeniedError = Errors.PermissionDeniedError;
  static UnprocessableEntityError = Errors.UnprocessableEntityError;

  static toFile = Uploads.toFile;
  static fileFromPath = Uploads.fileFromPath;
}

export const {
  CadenzaClientError,
  APIError,
  APIConnectionError,
  APIConnectionTimeoutError,
  APIUserAbortError,
  NotFoundError,
  ConflictError,
  RateLimitError,
  BadRequestError,
  AuthenticationError,
  InternalServerError,
  PermissionDeniedError,
  UnprocessableEntityError,
} = Errors;

export import toFile = Uploads.toFile;
export import fileFromPath = Uploads.fileFromPath;

export namespace CadenzaClient {
  export import RequestOptions = Core.RequestOptions;

  export import Offset = Pagination.Offset;
  export import OffsetParams = Pagination.OffsetParams;
  export import OffsetResponse = Pagination.OffsetResponse;

  export import Health = API.Health;
  export import HealthGetResponse = API.HealthGetResponse;

  export import Clients = API.Clients;

  export import ExchangeAccounts = API.ExchangeAccounts;
  export import ExchangeAccount = API.ExchangeAccount;
  export import ExchangeAccountCreateResponse = API.ExchangeAccountCreateResponse;
  export import ExchangeAccountUpdateResponse = API.ExchangeAccountUpdateResponse;
  export import ExchangeAccountListResponse = API.ExchangeAccountListResponse;
  export import ExchangeAccountRemoveResponse = API.ExchangeAccountRemoveResponse;
  export import ExchangeAccountSetExchangePriorityResponse = API.ExchangeAccountSetExchangePriorityResponse;
  export import ExchangeAccountCreateParams = API.ExchangeAccountCreateParams;
  export import ExchangeAccountUpdateParams = API.ExchangeAccountUpdateParams;
  export import ExchangeAccountRemoveParams = API.ExchangeAccountRemoveParams;
  export import ExchangeAccountSetExchangePriorityParams = API.ExchangeAccountSetExchangePriorityParams;

  export import Market = API.Market;

  export import Trading = API.Trading;

  export import Portfolio = API.Portfolio;
  export import ExchangeAccountBalance = API.ExchangeAccountBalance;
  export import ExchangeAccountCredit = API.ExchangeAccountCredit;
  export import ExchangeAccountPosition = API.ExchangeAccountPosition;
  export import PortfolioListBalancesResponse = API.PortfolioListBalancesResponse;
  export import PortfolioListCreditResponse = API.PortfolioListCreditResponse;
  export import PortfolioListPositionsResponse = API.PortfolioListPositionsResponse;
  export import PortfolioListBalancesParams = API.PortfolioListBalancesParams;
  export import PortfolioListCreditParams = API.PortfolioListCreditParams;
  export import PortfolioListPositionsParams = API.PortfolioListPositionsParams;
}

export default CadenzaClient;
