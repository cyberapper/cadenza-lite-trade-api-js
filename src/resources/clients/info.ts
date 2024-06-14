// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../core';
import { APIResource } from '../../resource';
import * as InfoAPI from './info';

export class Info extends APIResource {
  /**
   * Check available exchange types in user information
   */
  retrieve(options?: Core.RequestOptions): Core.APIPromise<InfoRetrieveResponse> {
    return this._client.get('/api/v2/client/getInfo', options);
  }
}

export interface InfoRetrieveResponse {
  /**
   * Available exchange types
   */
  exchangeTypes?: Array<string>;
}

export namespace Info {
  export import InfoRetrieveResponse = InfoAPI.InfoRetrieveResponse;
}
