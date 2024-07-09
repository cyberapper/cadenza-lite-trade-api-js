// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as KlineAPI from './kline';

export class Kline extends APIResource {
  /**
   * Get historical kline data
   */
  get(query: KlineGetParams, options?: Core.RequestOptions): Core.APIPromise<KlineGetResponse> {
    return this._client.get('/api/v2/market/kline', { query, ...options });
  }
}

export interface Ohlcv {
  /**
   * Close price
   */
  c?: number;

  /**
   * High price
   */
  h?: number;

  /**
   * Low price
   */
  l?: number;

  /**
   * Open price
   */
  o?: number;

  /**
   * Start time (in unix milliseconds)
   */
  t?: number;

  /**
   * Volume
   */
  v?: number;
}

export type KlineGetResponse = Array<Ohlcv>;

export interface KlineGetParams {
  /**
   * Exchange type
   */
  exchangeType: 'BINANCE' | 'BINANCE_MARGIN' | 'B2C2' | 'WINTERMUTE' | 'BLOCKFILLS' | 'STONEX';

  /**
   * Kline interval
   */
  interval: '1s' | '1m' | '5m' | '15m' | '30m' | '1h' | '2h' | '1d' | '1w';

  /**
   * Symbol
   */
  symbol: string;

  /**
   * End time (in unix milliseconds)
   */
  endTime?: number;

  /**
   * Limit the number of returned results.
   */
  limit?: number;

  /**
   * Start time (in unix milliseconds)
   */
  startTime?: number;
}

export namespace Kline {
  export import Ohlcv = KlineAPI.Ohlcv;
  export import KlineGetResponse = KlineAPI.KlineGetResponse;
  export import KlineGetParams = KlineAPI.KlineGetParams;
}
