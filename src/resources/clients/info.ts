// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as InfoAPI from './info';

export class Info extends APIResource {
  /**
   * Check available exchange types in user information
   */
  get(options?: Core.RequestOptions): Core.APIPromise<InfoGetResponse> {
    return this._client.get('/api/v2/client/getInfo', options);
  }
}

export interface InfoGetResponse {
  /**
   * Available exchange types
   */
  exchangeTypes?: Array<'BINANCE' | 'BINANCE_MARGIN' | 'B2C2' | 'WINTERMUTE' | 'BLOCKFILLS' | 'STONEX'>;
}

export namespace Info {
  export import InfoGetResponse = InfoAPI.InfoGetResponse;
}
