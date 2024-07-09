// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as HealthAPI from './health';

export class Health extends APIResource {
  /**
   * Health check
   */
  get(options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.get('/api/v2/health', {
      ...options,
      headers: { Accept: 'text/plain', ...options?.headers },
    });
  }
}

export type HealthGetResponse = string;

export namespace Health {
  export import HealthGetResponse = HealthAPI.HealthGetResponse;
}
