// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as OrderbookAPI from './orderbook';

export class OrderbookResource extends APIResource {
  /**
   * Get order book
   */
  get(query: OrderbookGetParams, options?: Core.RequestOptions): Core.APIPromise<OrderbookGetResponse> {
    return this._client.get('/api/v2/market/orderbook', { query, ...options });
  }
}

export interface Orderbook {
  asks?: Array<Array<number>>;

  bids?: Array<Array<number>>;

  exchangeType?: string;

  /**
   * Order book level
   */
  level?: number;

  symbol?: string;
}

export type OrderbookGetResponse = Array<Orderbook>;

export interface OrderbookGetParams {
  /**
   * Exchange type
   */
  exchangeType: 'BINANCE' | 'BINANCE_MARGIN' | 'B2C2' | 'WINTERMUTE' | 'BLOCKFILLS' | 'STONEX';

  /**
   * Symbol
   */
  symbol: string;

  /**
   * Limit the number of returned results.
   */
  limit?: number;
}

export namespace OrderbookResource {
  export import Orderbook = OrderbookAPI.Orderbook;
  export import OrderbookGetResponse = OrderbookAPI.OrderbookGetResponse;
  export import OrderbookGetParams = OrderbookAPI.OrderbookGetParams;
}
