import {
  Configuration,
  TradeApi,
  MarketApi,
} from "./algo724-openapi-ts-client";
import { CADENZA_BASE_PATH } from "./cadenza-env-checker";

export async function createTradeApi(accessToken: string) {
  const configuration = new Configuration({
    basePath: CADENZA_BASE_PATH,
    accessToken: accessToken,
  });
  return new TradeApi(configuration);
}

export async function createMarketApi(accessToken: string) {
  const configuration = new Configuration({
    basePath: CADENZA_BASE_PATH,
    accessToken: accessToken,
  });
  return new MarketApi(configuration);
}
