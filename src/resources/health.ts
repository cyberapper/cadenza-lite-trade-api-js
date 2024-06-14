// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../core';
import { APIResource } from '../resource';
import * as HealthAPI from './health';

export class Health extends APIResource {
  /**
   * Health check
   */
  retreive(options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.get('/api/v2/health', {
      ...options,
      headers: { Accept: 'text/plain', ...options?.headers },
    });
  }
}

export type HealthRetreiveResponse = string;

export namespace Health {
  export import HealthRetreiveResponse = HealthAPI.HealthRetreiveResponse;
}
