// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../core';
import { APIResource } from '../resource';
import * as ExchangeAPI from './exchange';

export class Exchange extends APIResource {
  /**
   * Set the priority of exchanges
   */
  setExchangePriority(
    body: ExchangeSetExchangePriorityParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ExchangeSetExchangePriorityResponse> {
    return this._client.post('/api/v2/exchange/setExchangePriority', { body, ...options });
  }
}

export interface ExchangeSetExchangePriorityResponse {
  data?: string;
}

export interface ExchangeSetExchangePriorityParams {
  /**
   * Priority list of exchanges in descending order
   */
  priority: Array<string>;
}

export namespace Exchange {
  export import ExchangeSetExchangePriorityResponse = ExchangeAPI.ExchangeSetExchangePriorityResponse;
  export import ExchangeSetExchangePriorityParams = ExchangeAPI.ExchangeSetExchangePriorityParams;
}
