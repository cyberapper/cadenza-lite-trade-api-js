// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../core';
import { APIResource } from '../../resource';
import * as TickerAPI from './ticker';

export class TickerResource extends APIResource {
  /**
   * Symbol price
   */
  retrieve(
    query: TickerRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TickerRetrieveResponse> {
    return this._client.get('/api/v2/market/ticker', { query, ...options });
  }
}

export interface Ticker {
  /**
   * Symbol
   */
  symbol: string;

  /**
   * Timestamp
   */
  timestamp: number;

  /**
   * Ask price
   */
  askPrice?: number;

  /**
   * Ask quantity
   */
  askQuantity?: number;

  /**
   * Bid price
   */
  bidPrice?: number;

  /**
   * Bid quantity
   */
  bidQuantity?: number;

  /**
   * Exchange type
   */
  exchangeType?: 'BINANCE' | 'BINANCE_MARGIN' | 'B2C2' | 'WINTERMUTE' | 'BLOCKFILLS' | 'STONEX';

  /**
   * Last price
   */
  lastPrice?: number;

  /**
   * Last quantity
   */
  lastQuantity?: number;
}

export type TickerRetrieveResponse = Array<Ticker>;

export interface TickerRetrieveParams {
  /**
   * Symbol
   */
  symbol: string;

  /**
   * Exchange type
   */
  exchangeType?: 'BINANCE' | 'BINANCE_MARGIN' | 'B2C2' | 'WINTERMUTE' | 'BLOCKFILLS' | 'STONEX';
}

export namespace TickerResource {
  export import Ticker = TickerAPI.Ticker;
  export import TickerRetrieveResponse = TickerAPI.TickerRetrieveResponse;
  export import TickerRetrieveParams = TickerAPI.TickerRetrieveParams;
}
