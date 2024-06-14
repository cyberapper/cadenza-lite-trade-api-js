# Health

Types:

- <code><a href="./src/resources/health.ts">HealthRetreiveResponse</a></code>

Methods:

- <code title="get /api/v2/health">client.health.<a href="./src/resources/health.ts">retreive</a>() -> string</code>

# Clients

## Info

Types:

- <code><a href="./src/resources/clients/info.ts">InfoRetrieveResponse</a></code>

Methods:

- <code title="get /api/v2/client/getInfo">client.clients.info.<a href="./src/resources/clients/info.ts">retrieve</a>() -> InfoRetrieveResponse</code>

# ExchangeAccounts

Types:

- <code><a href="./src/resources/exchange-accounts.ts">ExchangeAccount</a></code>
- <code><a href="./src/resources/exchange-accounts.ts">ExchangeAccountCreateResponse</a></code>
- <code><a href="./src/resources/exchange-accounts.ts">ExchangeAccountUpdateResponse</a></code>
- <code><a href="./src/resources/exchange-accounts.ts">ExchangeAccountListResponse</a></code>
- <code><a href="./src/resources/exchange-accounts.ts">ExchangeAccountRemoveResponse</a></code>

Methods:

- <code title="post /api/v2/exchange/addExchangeAccount">client.exchangeAccounts.<a href="./src/resources/exchange-accounts.ts">create</a>({ ...params }) -> ExchangeAccountCreateResponse</code>
- <code title="post /api/v2/exchange/updateExchangeAccount">client.exchangeAccounts.<a href="./src/resources/exchange-accounts.ts">update</a>({ ...params }) -> ExchangeAccountUpdateResponse</code>
- <code title="get /api/v2/exchange/listExchangeAccounts">client.exchangeAccounts.<a href="./src/resources/exchange-accounts.ts">list</a>() -> ExchangeAccountListResponse</code>
- <code title="post /api/v2/exchange/removeExchangeAccount">client.exchangeAccounts.<a href="./src/resources/exchange-accounts.ts">remove</a>({ ...params }) -> ExchangeAccountRemoveResponse</code>

# MarketSymbols

Types:

- <code><a href="./src/resources/market-symbols/market-symbols.ts">MarketSymbolListResponse</a></code>

Methods:

- <code title="get /api/v2/market/listSymbolInfo">client.marketSymbols.<a href="./src/resources/market-symbols/market-symbols.ts">list</a>({ ...params }) -> MarketSymbolListResponse</code>

## Ticker

Types:

- <code><a href="./src/resources/market-symbols/ticker.ts">Ticker</a></code>
- <code><a href="./src/resources/market-symbols/ticker.ts">TickerRetrieveResponse</a></code>

Methods:

- <code title="get /api/v2/market/ticker">client.marketSymbols.ticker.<a href="./src/resources/market-symbols/ticker.ts">retrieve</a>({ ...params }) -> TickerRetrieveResponse</code>

## Orderbook

Types:

- <code><a href="./src/resources/market-symbols/orderbook.ts">Orderbook</a></code>
- <code><a href="./src/resources/market-symbols/orderbook.ts">OrderbookRetrieveResponse</a></code>

Methods:

- <code title="get /api/v2/market/orderbook">client.marketSymbols.orderbook.<a href="./src/resources/market-symbols/orderbook.ts">retrieve</a>({ ...params }) -> OrderbookRetrieveResponse</code>

## Kline

Types:

- <code><a href="./src/resources/market-symbols/kline.ts">Ohlcv</a></code>

Methods:

- <code title="get /api/v2/market/kline">client.marketSymbols.kline.<a href="./src/resources/market-symbols/kline.ts">retrieve</a>({ ...params }) -> Ohlcv</code>

# Exchange

Types:

- <code><a href="./src/resources/exchange.ts">ExchangeSetExchangePriorityResponse</a></code>

Methods:

- <code title="post /api/v2/exchange/setExchangePriority">client.exchange.<a href="./src/resources/exchange.ts">setExchangePriority</a>({ ...params }) -> ExchangeSetExchangePriorityResponse</code>

# Trading

Types:

- <code><a href="./src/resources/trading.ts">Order</a></code>
- <code><a href="./src/resources/trading.ts">QuoteExecutionReport</a></code>
- <code><a href="./src/resources/trading.ts">QuoteWithOrderCandidates</a></code>
- <code><a href="./src/resources/trading.ts">TradingFetchQuotesResponse</a></code>
- <code><a href="./src/resources/trading.ts">TradingListOrdersResponse</a></code>
- <code><a href="./src/resources/trading.ts">TradingPlaceOrderResponse</a></code>

Methods:

- <code title="post /api/v2/trading/cancelOrder">client.trading.<a href="./src/resources/trading.ts">cancelOrder</a>({ ...params }) -> Order</code>
- <code title="post /api/v2/trading/fetchQuotes">client.trading.<a href="./src/resources/trading.ts">fetchQuotes</a>({ ...params }) -> TradingFetchQuotesResponse</code>
- <code title="post /api/v2/trading/getQuoteExecutionReport">client.trading.<a href="./src/resources/trading.ts">getQuoteExecutionReport</a>({ ...params }) -> QuoteExecutionReport</code>
- <code title="get /api/v2/trading/listOrders">client.trading.<a href="./src/resources/trading.ts">listOrders</a>({ ...params }) -> TradingListOrdersResponse</code>
- <code title="post /api/v2/trading/placeOrder">client.trading.<a href="./src/resources/trading.ts">placeOrder</a>({ ...params }) -> TradingPlaceOrderResponse</code>

# Portfolio

Types:

- <code><a href="./src/resources/portfolio.ts">ExchangeBalance</a></code>
- <code><a href="./src/resources/portfolio.ts">ExchangePosition</a></code>
- <code><a href="./src/resources/portfolio.ts">PortfolioListBalancesResponse</a></code>
- <code><a href="./src/resources/portfolio.ts">PortfolioListCreditResponse</a></code>
- <code><a href="./src/resources/portfolio.ts">PortfolioListPositionsResponse</a></code>

Methods:

- <code title="get /api/v2/portfolio/listBalances">client.portfolio.<a href="./src/resources/portfolio.ts">listBalances</a>({ ...params }) -> PortfolioListBalancesResponse</code>
- <code title="get /api/v2/portfolio/listCredit">client.portfolio.<a href="./src/resources/portfolio.ts">listCredit</a>({ ...params }) -> PortfolioListCreditResponse</code>
- <code title="get /api/v2/portfolio/listPositions">client.portfolio.<a href="./src/resources/portfolio.ts">listPositions</a>({ ...params }) -> PortfolioListPositionsResponse</code>
