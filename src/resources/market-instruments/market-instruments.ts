// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../core';
import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as MarketInstrumentsAPI from './market-instruments';
import * as KlineAPI from './kline';
import * as OrderbookAPI from './orderbook';
import * as TickerAPI from './ticker';

export class MarketInstruments extends APIResource {
  ticker: TickerAPI.TickerResource = new TickerAPI.TickerResource(this._client);
  orderbook: OrderbookAPI.OrderbookResource = new OrderbookAPI.OrderbookResource(this._client);
  kline: KlineAPI.Kline = new KlineAPI.Kline(this._client);

  /**
   * List available exchange symbols
   */
  list(
    query?: MarketInstrumentListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MarketInstrumentListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<MarketInstrumentListResponse>;
  list(
    query: MarketInstrumentListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<MarketInstrumentListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/api/v2/market/listSymbolInfo', { query, ...options });
  }
}

export type MarketInstrumentListResponse =
  Array<MarketInstrumentListResponse.MarketInstrumentListResponseItem>;

export namespace MarketInstrumentListResponse {
  export interface MarketInstrumentListResponseItem {
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
     * Order type
     */
    orderTypes?:
      | 'MARKET'
      | 'LIMIT'
      | 'STOP_LOSS'
      | 'STOP_LOSS_LIMIT'
      | 'TAKE_PROFIT'
      | 'TAKE_PROFIT_LIMIT'
      | 'QUOTED';

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
     * Time in force
     */
    timeInForce?:
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
      | 'EXT';
  }
}

export interface MarketInstrumentListParams {
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

export namespace MarketInstruments {
  export import MarketInstrumentListResponse = MarketInstrumentsAPI.MarketInstrumentListResponse;
  export import MarketInstrumentListParams = MarketInstrumentsAPI.MarketInstrumentListParams;
  export import TickerResource = TickerAPI.TickerResource;
  export import Ticker = TickerAPI.Ticker;
  export import TickerRetrieveResponse = TickerAPI.TickerRetrieveResponse;
  export import TickerRetrieveParams = TickerAPI.TickerRetrieveParams;
  export import OrderbookResource = OrderbookAPI.OrderbookResource;
  export import Orderbook = OrderbookAPI.Orderbook;
  export import OrderbookRetrieveResponse = OrderbookAPI.OrderbookRetrieveResponse;
  export import OrderbookRetrieveParams = OrderbookAPI.OrderbookRetrieveParams;
  export import Kline = KlineAPI.Kline;
  export import Ohlcv = KlineAPI.Ohlcv;
  export import KlineRetrieveParams = KlineAPI.KlineRetrieveParams;
}
