// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../core';
import { APIResource } from '../../resource';
import * as OrderbookAPI from './orderbook';

export class OrderbookResource extends APIResource {
  /**
   * Get order book
   */
  retrieve(
    query: OrderbookRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OrderbookRetrieveResponse> {
    return this._client.get('/api/v2/market/orderbook', { query, ...options });
  }
}

export interface Orderbook {
  asks?: Array<Array<number>>;

  bids?: Array<Array<number>>;

  exchangeType?: string;

  symbol?: string;
}

export type OrderbookRetrieveResponse = Array<Orderbook>;

export interface OrderbookRetrieveParams {
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
  export import OrderbookRetrieveResponse = OrderbookAPI.OrderbookRetrieveResponse;
  export import OrderbookRetrieveParams = OrderbookAPI.OrderbookRetrieveParams;
}
