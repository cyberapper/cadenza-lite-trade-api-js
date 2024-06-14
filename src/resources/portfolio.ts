// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../core';
import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as PortfolioAPI from './portfolio';

export class Portfolio extends APIResource {
  /**
   * List balances
   */
  listBalances(
    query?: PortfolioListBalancesParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PortfolioListBalancesResponse>;
  listBalances(options?: Core.RequestOptions): Core.APIPromise<PortfolioListBalancesResponse>;
  listBalances(
    query: PortfolioListBalancesParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<PortfolioListBalancesResponse> {
    if (isRequestOptions(query)) {
      return this.listBalances({}, query);
    }
    return this._client.get('/api/v2/portfolio/listBalances', { query, ...options });
  }

  /**
   * List credit
   */
  listCredit(
    query?: PortfolioListCreditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PortfolioListCreditResponse>;
  listCredit(options?: Core.RequestOptions): Core.APIPromise<PortfolioListCreditResponse>;
  listCredit(
    query: PortfolioListCreditParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<PortfolioListCreditResponse> {
    if (isRequestOptions(query)) {
      return this.listCredit({}, query);
    }
    return this._client.get('/api/v2/portfolio/listCredit', { query, ...options });
  }

  /**
   * List positions
   */
  listPositions(
    query?: PortfolioListPositionsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PortfolioListPositionsResponse>;
  listPositions(options?: Core.RequestOptions): Core.APIPromise<PortfolioListPositionsResponse>;
  listPositions(
    query: PortfolioListPositionsParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<PortfolioListPositionsResponse> {
    if (isRequestOptions(query)) {
      return this.listPositions({}, query);
    }
    return this._client.get('/api/v2/portfolio/listPositions', { query, ...options });
  }
}

export interface ExchangeBalance {
  /**
   * List of balances
   */
  balances: Array<ExchangeBalance.Balance>;

  /**
   * Exchange account ID
   */
  exchangeAccountId: string;
}

export namespace ExchangeBalance {
  export interface Balance {
    /**
     * Asset
     */
    asset: string;

    /**
     * Free balance
     */
    free: number;

    /**
     * Locked balance
     */
    locked: number;
  }
}

export interface ExchangePosition {
  /**
   * Exchange account ID
   */
  exchangeAccountId?: string;

  /**
   * List of positions
   */
  positions?: Array<ExchangePosition.Position>;
}

export namespace ExchangePosition {
  /**
   * List of positions
   */
  export interface Position {
    /**
     * Amount
     */
    amount: number;

    /**
     * Position side
     */
    positionSide: 'LONG' | 'SHORT';

    /**
     * Status
     */
    status: 'OPEN';

    /**
     * Symbol
     */
    symbol: string;

    /**
     * Cost
     */
    cost?: number;

    /**
     * Entry price
     */
    entryPrice?: number;
  }
}

export type PortfolioListBalancesResponse = Array<ExchangeBalance>;

/**
 * List of account credit info
 */
export type PortfolioListCreditResponse = Array<PortfolioListCreditResponse.PortfolioListCreditResponseItem>;

export namespace PortfolioListCreditResponse {
  export interface PortfolioListCreditResponseItem {
    exchangeAcccountID: string;

    exchangeType: string;

    accountType?: string;

    /**
     * The amount of assert we could borrow from exchange
     */
    credit?: number;

    currency?: string;

    /**
     * The amount of assert we borrowed from exchange
     */
    margin?: number;

    /**
     * The percentage of margin
     */
    marginPercentage?: number;

    maxRiskExposure?: number;

    riskExposure?: number;
  }
}

export type PortfolioListPositionsResponse = Array<ExchangePosition>;

export interface PortfolioListBalancesParams {
  /**
   * Exchange account ID
   */
  exchangeAccountId?: string;

  /**
   * Hide small account
   */
  hideEmptyValue?: boolean;
}

export interface PortfolioListCreditParams {
  /**
   * Exchange account ID
   */
  exchangeAccountId?: string;

  /**
   * Hide small account
   */
  hideEmptyValue?: boolean;
}

export interface PortfolioListPositionsParams {
  /**
   * Exchange account ID
   */
  exchangeAccountId?: string;

  /**
   * Hide small account
   */
  hideEmptyValue?: boolean;
}

export namespace Portfolio {
  export import ExchangeBalance = PortfolioAPI.ExchangeBalance;
  export import ExchangePosition = PortfolioAPI.ExchangePosition;
  export import PortfolioListBalancesResponse = PortfolioAPI.PortfolioListBalancesResponse;
  export import PortfolioListCreditResponse = PortfolioAPI.PortfolioListCreditResponse;
  export import PortfolioListPositionsResponse = PortfolioAPI.PortfolioListPositionsResponse;
  export import PortfolioListBalancesParams = PortfolioAPI.PortfolioListBalancesParams;
  export import PortfolioListCreditParams = PortfolioAPI.PortfolioListCreditParams;
  export import PortfolioListPositionsParams = PortfolioAPI.PortfolioListPositionsParams;
}
