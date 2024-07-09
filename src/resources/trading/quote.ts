// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as QuoteAPI from './quote';

export class Quote extends APIResource {
  /**
   * Quote will give the best quote from all available exchange accounts
   */
  requestForQuote(
    body: QuoteRequestForQuoteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<QuoteRequestForQuoteResponse> {
    return this._client.post('/api/v2/trading/fetchQuotes', { body, ...options });
  }
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

export type QuoteRequestForQuoteResponse = Array<QuoteWithOrderCandidates>;

export interface QuoteRequestForQuoteParams {
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

export namespace Quote {
  export import QuoteWithOrderCandidates = QuoteAPI.QuoteWithOrderCandidates;
  export import QuoteRequestForQuoteResponse = QuoteAPI.QuoteRequestForQuoteResponse;
  export import QuoteRequestForQuoteParams = QuoteAPI.QuoteRequestForQuoteParams;
}
