import {
  Configuration,
  TradeApi,
  PlaceOrderRequest,
  OrderSide,
  OrderType,
  TimeInForce,
  ApiV2TradingFetchQuotesPostRequest,
  MarketApi,
} from "./algo724-openapi-ts-client";
import { getServiceAccountJwt } from "./cadenza-api-config";
import { createMarketApi, createTradeApi } from "./cadenza-client-factory";
import { CADENZA_BASE_PATH } from "./cadenza-env-checker";

async function placeOrder(
  idempotencyKey: string,
  placeOrderRequest: PlaceOrderRequest
) {
  // Retrieve the JWT token using the provided function

  // Set up the configuration for the API client
  const configuration = new Configuration({
    basePath: CADENZA_BASE_PATH, // Use the base path from your environment or configuration
    accessToken: accessToken, // Set the retrieved access token
    // Add other configuration properties if needed
  });

  // Create an instance of the TradeApi class with the configuration
  const tradeApi = new TradeApi(configuration);

  // Call the method to place an order
  try {
    const response = await tradeApi.apiV2TradingPlaceOrderPost(
      idempotencyKey,
      placeOrderRequest
    );
    console.log("Order placed successfully:", response.data);
  } catch (error) {
    console.error("Error placing order:", error);
  }
}

async function fetchQuotes() {
  // Retrieve the JWT token using the provided function

  // Set up the configuration for the API client

  // Create an instance of the TradeApi class with the configuration
  const tradeApi = new TradeApi(configuration);

  // Define the body of the POST request
  const requestBody: ApiV2TradingFetchQuotesPostRequest = {
    orderSide: "BUY",
    quantity: 50000,
    quoteCurrency: "USDT",
    baseCurrency: "BTC",
  };

  // Call the method to fetch quotes with the request body
  try {
    // Assuming the method to fetch quotes is a POST request and named `apiV2TradingFetchQuotesPost`
    // and it accepts the request body as a parameter
    const response = await tradeApi.apiV2TradingFetchQuotesPost(requestBody);
    console.log("Quotes fetched successfully:", response.data);
    return response.data; // or handle the data as needed
  } catch (error) {
    console.error("Error fetching quotes:", error);
    throw error; // or handle the error as needed
  }
}

async function listSymbolInfo(exchangeType) {
  // Create an instance of the MarketApi class with the configuration
  const marketApiClient = new MarketApi(configuration);

  // Call the method to list symbol information
  try {
    // Assuming the method to list symbol information is named `apiV2MarketListSymbolInfoGet`
    const response = await marketApiClient.apiV2MarketListSymbolInfoGet();
    console.log("Symbol information retrieved successfully:", response.data);
    return response.data; // or handle the data as needed
  } catch (error) {
    console.error("Error retrieving symbol information:", error);
    throw error; // or handle the error as needed
  }
}

//listSymbolInfo(configuration);

var quote = await fetchQuotes(configuration);
// Define your place order request parameters
const placeOrderRequest: PlaceOrderRequest = {
  exchangeAccountId: quote[0].exchangeAccountId,
  orderSide: OrderSide.Buy, // or OrderSide.Sell
  orderType: OrderType.Limit, // or another order type
  quantity: 1.0,
  price: 100.0, // the price to buy/sell at
  symbol: "BTCUSD", // the trading pair
  timeInForce: TimeInForce.Gtc, // Good Till Cancelled, or another time in force
};

const accessToken = await getServiceAccountJwt("cred.json");

var marketApiClient = await createMarketApi(accessToken);
var list = marketApiClient.apiV2MarketListSymbolInfoGet;
console.log(list);

var tradeApiClient = await createTradeApi(accessToken);
const requestBody: ApiV2TradingFetchQuotesPostRequest = {
  orderSide: "BUY",
  quantity: 50000,
  quoteCurrency: "USDT",
  baseCurrency: "BTC",
};
var quote = await tradeApiClient.apiV2TradingFetchQuotesPost(requestBody);
