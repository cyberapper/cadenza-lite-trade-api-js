// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as ExecutionReportAPI from './execution-report';
import * as OrderAPI from './order';

export class ExecutionReport extends APIResource {
  /**
   * Quote will give the best quote from all available exchange accounts
   */
  getQuoteExecutionReport(
    body: ExecutionReportGetQuoteExecutionReportParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<QuoteExecutionReport> {
    return this._client.post('/api/v2/trading/getQuoteExecutionReport', { body, ...options });
  }
}

export interface QuoteExecutionReport {
  /**
   * Base currency
   */
  baseCurrency: string;

  /**
   * Create time of the quote
   */
  createdAt: number;

  /**
   * Quote currency
   */
  quoteCurrency: string;

  /**
   * Quote request ID
   */
  quoteRequestId: string;

  /**
   * Status of the quote execution, should only have SUBMITTED, ACCEPTED,
   * PARTIALLY_FILLED, FILLED, EXPIRED. the final status of the quote execution
   * should be either FILLED or EXPIRED
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
   * Last updated time of the quote execution
   */
  updatedAt: number;

  /**
   * Expiration time of the quote
   */
  validUntil: number;

  /**
   * Order request ID, Client Order ID
   */
  clOrdId?: string;

  /**
   * Cost, the total cost of the quote
   */
  cost?: number;

  /**
   * List of executions to fulfill the order, the order status should only have
   * FILLED, REJECTED, or EXPIRED
   */
  executions?: Array<OrderAPI.Order>;

  /**
   * Fees
   */
  fees?: Array<QuoteExecutionReport.Fee>;

  /**
   * Filled quantity, the quantity of the base currency executed
   */
  filled?: number;

  order?: OrderAPI.Order;

  /**
   * Route policy. For PRIORITY, the order request will be routed to the exchange
   * account with the highest priority. For QUOTE, the system will execute the
   * execution plan based on the quote. Order request with route policy QUOTE will
   * only accept two parameters, quoteRequestId and priceSlippageTolerance
   */
  routePolicy?: 'PRIORITY' | 'QUOTE';
}

export namespace QuoteExecutionReport {
  export interface Fee {
    /**
     * Asset
     */
    asset?: string;

    /**
     * Quantity
     */
    quantity?: number;
  }
}

export interface ExecutionReportGetQuoteExecutionReportParams {
  /**
   * Quote request ID
   */
  quoteRequestId: string;
}

export namespace ExecutionReport {
  export import QuoteExecutionReport = ExecutionReportAPI.QuoteExecutionReport;
  export import ExecutionReportGetQuoteExecutionReportParams = ExecutionReportAPI.ExecutionReportGetQuoteExecutionReportParams;
}
