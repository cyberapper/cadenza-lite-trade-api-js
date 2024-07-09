// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as OrderAPI from './order';
import { Offset, type OffsetParams } from '../../pagination';

export class OrderResource extends APIResource {
  /**
   * Place order
   */
  create(params?: OrderCreateParams, options?: Core.RequestOptions): Core.APIPromise<OrderCreateResponse>;
  create(options?: Core.RequestOptions): Core.APIPromise<OrderCreateResponse>;
  create(
    params: OrderCreateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<OrderCreateResponse> {
    if (isRequestOptions(params)) {
      return this.create({}, params);
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

  /**
   * List orders
   */
  list(query?: OrderListParams, options?: Core.RequestOptions): Core.PagePromise<OrdersOffset, Order>;
  list(options?: Core.RequestOptions): Core.PagePromise<OrdersOffset, Order>;
  list(
    query: OrderListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<OrdersOffset, Order> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/api/v2/trading/listOrders', OrdersOffset, { query, ...options });
  }

  /**
   * Cancel order. If the order is already filled, it will return an error.
   */
  cancel(body: OrderCancelParams, options?: Core.RequestOptions): Core.APIPromise<Order> {
    return this._client.post('/api/v2/trading/cancelOrder', { body, ...options });
  }
}

export class OrdersOffset extends Offset<Order> {}

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

  /**
   * User ID
   */
  userId?: string;
}

export type OrderCreateResponse = Array<Order>;

export interface OrderCreateParams {
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

export interface OrderListParams extends OffsetParams {
  /**
   * End time (in unix milliseconds)
   */
  endTime?: number;

  /**
   * Exchange account ID
   */
  exchangeAccountId?: string;

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

export interface OrderCancelParams {
  /**
   * Order ID
   */
  orderId: string;
}

export namespace OrderResource {
  export import Order = OrderAPI.Order;
  export import OrderCreateResponse = OrderAPI.OrderCreateResponse;
  export import OrdersOffset = OrderAPI.OrdersOffset;
  export import OrderCreateParams = OrderAPI.OrderCreateParams;
  export import OrderListParams = OrderAPI.OrderListParams;
  export import OrderCancelParams = OrderAPI.OrderCancelParams;
}
