// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as InstrumentAPI from './instrument';
import * as KlineAPI from './kline';
import * as OrderbookAPI from './orderbook';
import * as TickerAPI from './ticker';

export class Market extends APIResource {
  instrument: InstrumentAPI.InstrumentResource = new InstrumentAPI.InstrumentResource(this._client);
  ticker: TickerAPI.TickerResource = new TickerAPI.TickerResource(this._client);
  orderbook: OrderbookAPI.OrderbookResource = new OrderbookAPI.OrderbookResource(this._client);
  kline: KlineAPI.Kline = new KlineAPI.Kline(this._client);
}

export namespace Market {
  export import InstrumentResource = InstrumentAPI.InstrumentResource;
  export import Instrument = InstrumentAPI.Instrument;
  export import InstrumentListResponse = InstrumentAPI.InstrumentListResponse;
  export import InstrumentListParams = InstrumentAPI.InstrumentListParams;
  export import TickerResource = TickerAPI.TickerResource;
  export import Ticker = TickerAPI.Ticker;
  export import TickerGetResponse = TickerAPI.TickerGetResponse;
  export import TickerGetParams = TickerAPI.TickerGetParams;
  export import OrderbookResource = OrderbookAPI.OrderbookResource;
  export import Orderbook = OrderbookAPI.Orderbook;
  export import OrderbookGetResponse = OrderbookAPI.OrderbookGetResponse;
  export import OrderbookGetParams = OrderbookAPI.OrderbookGetParams;
  export import Kline = KlineAPI.Kline;
  export import Ohlcv = KlineAPI.Ohlcv;
  export import KlineGetResponse = KlineAPI.KlineGetResponse;
  export import KlineGetParams = KlineAPI.KlineGetParams;
}
