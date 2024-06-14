// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../core';
import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as TradingAPI from './trading';

export class Trading extends APIResource {
  /**
   * Cancel order. If the order is already filled, it will return an error.
   */
  cancelOrder(body: TradingCancelOrderParams, options?: Core.RequestOptions): Core.APIPromise<Order> {
    return this._client.post('/api/v2/trading/cancelOrder', { body, ...options });
  }

  /**
   * Quote will give the best quote from all available exchange accounts
   */
  fetchQuotes(
    body: TradingFetchQuotesParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TradingFetchQuotesResponse> {
    return this._client.post('/api/v2/trading/fetchQuotes', { body, ...options });
  }

  /**
   * Quote will give the best quote from all available exchange accounts
   */
  getQuoteExecutionReport(
    body: TradingGetQuoteExecutionReportParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<QuoteExecutionReport> {
    return this._client.post('/api/v2/trading/getQuoteExecutionReport', { body, ...options });
  }

  /**
   * List orders
   */
  listOrders(
    query?: TradingListOrdersParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TradingListOrdersResponse>;
  listOrders(options?: Core.RequestOptions): Core.APIPromise<TradingListOrdersResponse>;
  listOrders(
    query: TradingListOrdersParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TradingListOrdersResponse> {
    if (isRequestOptions(query)) {
      return this.listOrders({}, query);
    }
    return this._client.get('/api/v2/trading/listOrders', { query, ...options });
  }

  /**
   * Place order
   */
  placeOrder(
    params?: TradingPlaceOrderParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TradingPlaceOrderResponse>;
  placeOrder(options?: Core.RequestOptions): Core.APIPromise<TradingPlaceOrderResponse>;
  placeOrder(
    params: TradingPlaceOrderParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TradingPlaceOrderResponse> {
    if (isRequestOptions(params)) {
      return this.placeOrder({}, params);
    }
    const { 'Idempotency-Key': idempotencyKey, ...body } = params;
    return this._client.post('/api/v2/trading/placeOrder', {
      body,
      ...options,
      headers: {
        ...(idempotencyKey != null ? { 'Idempotency-Key': idempotencyKey } : undefined),
        ...options?.headers,
      },
    });
  }
}

export interface Order {
  /**
   * The total cost of this order.
   */
  cost: number;

  /**
   * Created timestamp
   */
  createdAt: number;

  /**
   * Exchange account ID
   */
  exchangeAccountId: string;

  /**
   * Exchange type
   */
  exchangeType: 'BINANCE' | 'BINANCE_MARGIN' | 'B2C2' | 'WINTERMUTE' | 'BLOCKFILLS' | 'STONEX';

  /**
   * The quantity of this order that has been filled.
   */
  filled: number;

  /**
   * Order side
   */
  orderSide: 'BUY' | 'SELL';

  /**
   * Order type
   */
  orderType:
    | 'MARKET'
    | 'LIMIT'
    | 'STOP_LOSS'
    | 'STOP_LOSS_LIMIT'
    | 'TAKE_PROFIT'
    | 'TAKE_PROFIT_LIMIT'
    | 'QUOTED';

  /**
   * Quantity
   */
  quantity: number;

  /**
   * Order status
   */
  status:
    | 'SUBMITTED'
    | 'ACCEPTED'
    | 'OPEN'
    | 'PARTIALLY_FILLED'
    | 'FILLED'
    | 'CANCELED'
    | 'PENDING_CANCEL'
    | 'REJECTED'
    | 'EXPIRED'
    | 'REVOKED';

  /**
   * Symbol
   */
  symbol: string;

  /**
   * Time in force
   */
  timeInForce:
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

  /**
   * Last updated timestamp
   */
  updatedAt: number;

  /**
   * User ID
   */
  userId: string;

  /**
   * Fee
   */
  fee?: number;

  /**
   * Fee currency
   */
  feeCurrency?: string;

  orderId?: string;

  /**
   * Position ID
   */
  positionId?: string;

  /**
   * Price
   */
  price?: number;

  /**
   * Quote Quantity
   */
  quoteQuantity?: number;

  /**
   * Tenant ID
   */
  tenantId?: string;
}

export interface QuoteExecutionReport {
  /**
   * Base currency
   */
  baseCurrency: string;

  /**
   * Quote currency
   */
  quoteCurrency: string;

  /**
   * Quote request ID
   */
  quoteRequestId: string;

  /**
   * Cost, the total cost of the quote
   */
  cost?: number;

  /**
   * Create time of the quote
   */
  createdAt?: number;

  /**
   * Filled quantity, the quantity of the base currency executed
   */
  filled?: number;

  /**
   * List of orders to fulfill the quote, the order status should only have FILLED,
   * REJECTED, or EXPIRED
   */
  orders?: Order;

  /**
   * Status of the quote execution, should only have SUBMITTED, ACCEPTED,
   * PARTIALLY_FILLED, FILLED, EXPIRED. the final status of the quote execution
   * should be either FILLED or EXPIRED
   */
  status?:
    | 'SUBMITTED'
    | 'ACCEPTED'
    | 'OPEN'
    | 'PARTIALLY_FILLED'
    | 'FILLED'
    | 'CANCELED'
    | 'PENDING_CANCEL'
    | 'REJECTED'
    | 'EXPIRED'
    | 'REVOKED';

  /**
   * Last updated time of the quote execution
   */
  updatedAt?: number;
}

export interface QuoteWithOrderCandidates {
  /**
   * Base currency
   */
  baseCurrency: string;

  /**
   * Quote currency
   */
  quoteCurrency: string;

  /**
   * Quote request ID
   */
  quoteRequestId: string;

  /**
   * Create time of the quote
   */
  timestamp: number;

  /**
   * Expiration time of the quote
   */
  validUntil: number;

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

  orderCandidates?: Array<QuoteWithOrderCandidates.OrderCandidate>;
}

export namespace QuoteWithOrderCandidates {
  export interface OrderCandidate {
    /**
     * Exchange account ID
     */
    exchangeAccountId?: string;

    /**
     * Order side
     */
    orderSide?: 'BUY' | 'SELL';

    /**
     * Order type
     */
    orderType?:
      | 'MARKET'
      | 'LIMIT'
      | 'STOP_LOSS'
      | 'STOP_LOSS_LIMIT'
      | 'TAKE_PROFIT'
      | 'TAKE_PROFIT_LIMIT'
      | 'QUOTED';

    /**
     * Quantity
     */
    quantity?: number;

    /**
     * Quote Quantity
     */
    quoteQuantity?: number;

    /**
     * Quote request ID
     */
    quoteRequestId?: string;

    /**
     * Route policy. For PRIORITY, the order request will be routed to the exchange
     * account with the highest priority. For QUOTE, the system will execute the
     * execution plan based on the quote. Order request with route policy QUOTE will
     * only accept two parameters, quoteRequestId and priceSlippageTolerance
     */
    routePolicy?: 'PRIORITY' | 'QUOTE';

    /**
     * Symbol
     */
    symbol?: string;
  }
}

export type TradingFetchQuotesResponse = Array<QuoteWithOrderCandidates>;

export interface TradingListOrdersResponse {
  data?: Array<Order>;

  /**
   * Limit of the returned results
   */
  limit?: number;

  /**
   * Offset of the returned results
   */
  offset?: number;

  /**
   * Total number of orders
   */
  total?: number;
}

export type TradingPlaceOrderResponse = Array<Order>;

export interface TradingCancelOrderParams {
  /**
   * Order ID
   */
  orderId: string;
}

export interface TradingFetchQuotesParams {
  /**
   * Base currency is the currency you want to buy or sell
   */
  baseCurrency: string;

  /**
   * Order side, BUY or SELL
   */
  orderSide: string;

  /**
   * Quote currency is the currency you want to pay or receive, and the price of the
   * base currency is quoted in the quote currency
   */
  quoteCurrency: string;

  /**
   * The identifier for the exchange account
   */
  exchangeAccountId?: string;

  /**
   * Amount of the base currency
   */
  quantity?: number;

  /**
   * Amount of the quote currency
   */
  quoteQuantity?: number;
}

export interface TradingGetQuoteExecutionReportParams {
  /**
   * Quote request ID
   */
  quoteRequestId: string;
}

export interface TradingListOrdersParams {
  /**
   * End time (in unix milliseconds)
   */
  endTime?: number;

  /**
   * Exchange account ID
   */
  exchangeAccountId?: string;

  /**
   * Limit the number of returned results.
   */
  limit?: number;

  /**
   * Offset of the returned results. Default: 0
   */
  offset?: number;

  /**
   * Order ID
   */
  orderId?: string;

  /**
   * Order status
   */
  orderStatus?:
    | 'SUBMITTED'
    | 'ACCEPTED'
    | 'OPEN'
    | 'PARTIALLY_FILLED'
    | 'FILLED'
    | 'CANCELED'
    | 'PENDING_CANCEL'
    | 'REJECTED'
    | 'EXPIRED'
    | 'REVOKED';

  /**
   * Start time (in unix milliseconds)
   */
  startTime?: number;

  /**
   * Symbol
   */
  symbol?: string;

  /**
   * Tenant ID
   */
  tenantId?: string;
}

export interface TradingPlaceOrderParams {
  /**
   * Body param: Exchange account ID
   */
  exchangeAccountId?: string;

  /**
   * Body param: Levarage
   */
  leverage?: number;

  /**
   * Body param: Order side
   */
  orderSide?: 'BUY' | 'SELL';

  /**
   * Body param: Order type
   */
  orderType?:
    | 'MARKET'
    | 'LIMIT'
    | 'STOP_LOSS'
    | 'STOP_LOSS_LIMIT'
    | 'TAKE_PROFIT'
    | 'TAKE_PROFIT_LIMIT'
    | 'QUOTED';

  /**
   * Body param: Position ID for closing position in margin trading
   */
  positionId?: string;

  /**
   * Body param: Price
   */
  price?: number;

  /**
   * Body param: Price slippage tolerance, range: [0, 0.1] with 2 decimal places
   */
  priceSlippageTolerance?: number;

  /**
   * Body param: Priority list of exchange account ID in descending order
   */
  priority?: Array<string>;

  /**
   * Body param: Quantity. One of quantity or quoteQuantity must be provided. If both
   * is provided, only quantity will be used.
   */
  quantity?: number;

  /**
   * Body param: Quote ID used by exchange for RFQ, e.g. WINTERMUTE need this field
   * to execute QUOTED order
   */
  quoteId?: string;

  /**
   * Body param: Quote Quantity
   */
  quoteQuantity?: number;

  /**
   * Body param: Quote request ID
   */
  quoteRequestId?: string;

  /**
   * Body param: Route policy. For PRIORITY, the order request will be routed to the
   * exchange account with the highest priority. For QUOTE, the system will execute
   * the execution plan based on the quote. Order request with route policy QUOTE
   * will only accept two parameters, quoteRequestId and priceSlippageTolerance
   */
  routePolicy?: 'PRIORITY' | 'QUOTE';

  /**
   * Body param: Symbol
   */
  symbol?: string;

  /**
   * Body param: Tenant ID
   */
  tenantId?: string;

  /**
   * Body param: Time in force
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

  /**
   * Header param: Idempotency key is used to ensure that the same request is not
   * processed more than once. If the same request is received again, the server will
   * return the same response as the first time.
   */
  'Idempotency-Key'?: string;
}

export namespace Trading {
  export import Order = TradingAPI.Order;
  export import QuoteExecutionReport = TradingAPI.QuoteExecutionReport;
  export import QuoteWithOrderCandidates = TradingAPI.QuoteWithOrderCandidates;
  export import TradingFetchQuotesResponse = TradingAPI.TradingFetchQuotesResponse;
  export import TradingListOrdersResponse = TradingAPI.TradingListOrdersResponse;
  export import TradingPlaceOrderResponse = TradingAPI.TradingPlaceOrderResponse;
  export import TradingCancelOrderParams = TradingAPI.TradingCancelOrderParams;
  export import TradingFetchQuotesParams = TradingAPI.TradingFetchQuotesParams;
  export import TradingGetQuoteExecutionReportParams = TradingAPI.TradingGetQuoteExecutionReportParams;
  export import TradingListOrdersParams = TradingAPI.TradingListOrdersParams;
  export import TradingPlaceOrderParams = TradingAPI.TradingPlaceOrderParams;
}
