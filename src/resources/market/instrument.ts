// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as InstrumentAPI from './instrument';

export class InstrumentResource extends APIResource {
  /**
   * List available exchange symbols
   */
  list(query?: InstrumentListParams, options?: Core.RequestOptions): Core.APIPromise<InstrumentListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<InstrumentListResponse>;
  list(
    query: InstrumentListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<InstrumentListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/api/v2/market/listSymbolInfo', { query, ...options });
  }
}

/**
 * Trading Instrument
 */
export interface Instrument {
  /**
   * Exchange type
   */
  exchangeType: 'BINANCE' | 'BINANCE_MARGIN' | 'B2C2' | 'WINTERMUTE' | 'BLOCKFILLS' | 'STONEX';

  /**
   * Symbol name
   */
  symbol: string;

  /**
   * Base currency
   */
  baseSymbol?: string;

  /**
   * Symbol description
   */
  description?: string;

  /**
   * Margin rate
   */
  marginRate?: number;

  /**
   * Max quantity
   */
  maxQuantity?: number;

  /**
   * Min quantity
   */
  minQuantity?: number;

  /**
   * Min tick, Price Tick
   */
  minTick?: number;

  /**
   * Supported order types
   */
  orderTypes?: Array<
    'MARKET' | 'LIMIT' | 'STOP_LOSS' | 'STOP_LOSS_LIMIT' | 'TAKE_PROFIT' | 'TAKE_PROFIT_LIMIT' | 'QUOTED'
  >;

  /**
   * Pip size
   */
  pipSize?: number;

  /**
   * Pip value
   */
  pipValue?: number;

  /**
   * Price precision
   */
  pricePrecision?: number;

  /**
   * Quantity precision
   */
  quantityPrecision?: number;

  /**
   * Quantity step, round lot
   */
  quantityStep?: number;

  /**
   * Quoted currency
   */
  quoteSymbol?: string;

  /**
   * Security type
   */
  securityType?:
    | 'SPOT'
    | 'CASH'
    | 'STOCK'
    | 'CRYPTO'
    | 'DERIVATIVE'
    | 'OPTION'
    | 'FUTURE'
    | 'FOREX'
    | 'COMMODITY';

  /**
   * Supported time in force
   */
  timeInForce?: Array<
    | 'DAY'
    | 'GTC'
    | 'GTX'
    | 'GTD'
    | 'OPG'
    | 'CLS'
    | 'IOC'
    | 'FOK'
    | 'GFA'
    | 'GFS'
    | 'GTM'
    | 'MOO'
    | 'MOC'
    | 'EXT'
  >;
}

export type InstrumentListResponse = Array<Instrument>;

export interface InstrumentListParams {
  /**
   * Whether to return detailed information
   */
  detail?: boolean;

  /**
   * Exchange type
   */
  exchangeType?: 'BINANCE' | 'BINANCE_MARGIN' | 'B2C2' | 'WINTERMUTE' | 'BLOCKFILLS' | 'STONEX';

  /**
   * Symbol
   */
  symbol?: string;
}

export namespace InstrumentResource {
  export import Instrument = InstrumentAPI.Instrument;
  export import InstrumentListResponse = InstrumentAPI.InstrumentListResponse;
  export import InstrumentListParams = InstrumentAPI.InstrumentListParams;
}
