// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as InfoAPI from './info';

export class Clients extends APIResource {
  info: InfoAPI.Info = new InfoAPI.Info(this._client);
}

export namespace Clients {
  export import Info = InfoAPI.Info;
  export import InfoGetResponse = InfoAPI.InfoGetResponse;
}
