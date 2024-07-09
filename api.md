# Health

Types:

- <code><a href="./src/resources/health.ts">HealthGetResponse</a></code>

Methods:

- <code title="get /api/v2/health">client.health.<a href="./src/resources/health.ts">get</a>() -> string</code>

# Clients

## Info

Types:

- <code><a href="./src/resources/clients/info.ts">InfoGetResponse</a></code>

Methods:

- <code title="get /api/v2/client/getInfo">client.clients.info.<a href="./src/resources/clients/info.ts">get</a>() -> InfoGetResponse</code>

# ExchangeAccounts

Types:

- <code><a href="./src/resources/exchange-accounts.ts">ExchangeAccount</a></code>
- <code><a href="./src/resources/exchange-accounts.ts">ExchangeAccountCreateResponse</a></code>
- <code><a href="./src/resources/exchange-accounts.ts">ExchangeAccountUpdateResponse</a></code>
- <code><a href="./src/resources/exchange-accounts.ts">ExchangeAccountListResponse</a></code>
- <code><a href="./src/resources/exchange-accounts.ts">ExchangeAccountRemoveResponse</a></code>
- <code><a href="./src/resources/exchange-accounts.ts">ExchangeAccountSetExchangePriorityResponse</a></code>

Methods:

- <code title="post /api/v2/exchange/addExchangeAccount">client.exchangeAccounts.<a href="./src/resources/exchange-accounts.ts">create</a>({ ...params }) -> ExchangeAccountCreateResponse</code>
- <code title="post /api/v2/exchange/updateExchangeAccount">client.exchangeAccounts.<a href="./src/resources/exchange-accounts.ts">update</a>({ ...params }) -> ExchangeAccountUpdateResponse</code>
- <code title="get /api/v2/exchange/listExchangeAccounts">client.exchangeAccounts.<a href="./src/resources/exchange-accounts.ts">list</a>() -> ExchangeAccountListResponse</code>
- <code title="post /api/v2/exchange/removeExchangeAccount">client.exchangeAccounts.<a href="./src/resources/exchange-accounts.ts">remove</a>({ ...params }) -> ExchangeAccountRemoveResponse</code>
- <code title="post /api/v2/exchange/setExchangePriority">client.exchangeAccounts.<a href="./src/resources/exchange-accounts.ts">setExchangePriority</a>({ ...params }) -> ExchangeAccountSetExchangePriorityResponse</code>

# Market

## Instrument

Types:

- <code><a href="./src/resources/market/instrument.ts">Instrument</a></code>
- <code><a href="./src/resources/market/instrument.ts">InstrumentListResponse</a></code>

Methods:

- <code title="get /api/v2/market/listSymbolInfo">client.market.instrument.<a href="./src/resources/market/instrument.ts">list</a>({ ...params }) -> InstrumentListResponse</code>

## Ticker

Types:

- <code><a href="./src/resources/market/ticker.ts">Ticker</a></code>
- <code><a href="./src/resources/market/ticker.ts">TickerGetResponse</a></code>

Methods:

- <code title="get /api/v2/market/ticker">client.market.ticker.<a href="./src/resources/market/ticker.ts">get</a>({ ...params }) -> TickerGetResponse</code>

## Orderbook

Types:

- <code><a href="./src/resources/market/orderbook.ts">Orderbook</a></code>
- <code><a href="./src/resources/market/orderbook.ts">OrderbookGetResponse</a></code>

Methods:

- <code title="get /api/v2/market/orderbook">client.market.orderbook.<a href="./src/resources/market/orderbook.ts">get</a>({ ...params }) -> OrderbookGetResponse</code>

## Kline

Types:

- <code><a href="./src/resources/market/kline.ts">Ohlcv</a></code>
- <code><a href="./src/resources/market/kline.ts">KlineGetResponse</a></code>

Methods:

- <code title="get /api/v2/market/kline">client.market.kline.<a href="./src/resources/market/kline.ts">get</a>({ ...params }) -> KlineGetResponse</code>

# Trading

## Order

Types:

- <code><a href="./src/resources/trading/order.ts">Order</a></code>
- <code><a href="./src/resources/trading/order.ts">OrderCreateResponse</a></code>

Methods:

- <code title="post /api/v2/trading/placeOrder">client.trading.order.<a href="./src/resources/trading/order.ts">create</a>({ ...params }) -> OrderCreateResponse</code>
- <code title="get /api/v2/trading/listOrders">client.trading.order.<a href="./src/resources/trading/order.ts">list</a>({ ...params }) -> OrdersOffset</code>
- <code title="post /api/v2/trading/cancelOrder">client.trading.order.<a href="./src/resources/trading/order.ts">cancel</a>({ ...params }) -> Order</code>

## Quote

Types:

- <code><a href="./src/resources/trading/quote.ts">QuoteWithOrderCandidates</a></code>
- <code><a href="./src/resources/trading/quote.ts">QuoteRequestForQuoteResponse</a></code>

Methods:

- <code title="post /api/v2/trading/fetchQuotes">client.trading.quote.<a href="./src/resources/trading/quote.ts">requestForQuote</a>({ ...params }) -> QuoteRequestForQuoteResponse</code>

## ExecutionReport

Types:

- <code><a href="./src/resources/trading/execution-report.ts">QuoteExecutionReport</a></code>

Methods:

- <code title="post /api/v2/trading/getQuoteExecutionReport">client.trading.executionReport.<a href="./src/resources/trading/execution-report.ts">getQuoteExecutionReport</a>({ ...params }) -> QuoteExecutionReport</code>

# Portfolio

Types:

- <code><a href="./src/resources/portfolio.ts">ExchangeAccountBalance</a></code>
- <code><a href="./src/resources/portfolio.ts">ExchangeAccountCredit</a></code>
- <code><a href="./src/resources/portfolio.ts">ExchangeAccountPosition</a></code>
- <code><a href="./src/resources/portfolio.ts">PortfolioListBalancesResponse</a></code>
- <code><a href="./src/resources/portfolio.ts">PortfolioListCreditResponse</a></code>
- <code><a href="./src/resources/portfolio.ts">PortfolioListPositionsResponse</a></code>

Methods:

- <code title="get /api/v2/portfolio/listBalances">client.portfolio.<a href="./src/resources/portfolio.ts">listBalances</a>({ ...params }) -> PortfolioListBalancesResponse</code>
- <code title="get /api/v2/portfolio/listCredit">client.portfolio.<a href="./src/resources/portfolio.ts">listCredit</a>({ ...params }) -> PortfolioListCreditResponse</code>
- <code title="get /api/v2/portfolio/listPositions">client.portfolio.<a href="./src/resources/portfolio.ts">listPositions</a>({ ...params }) -> PortfolioListPositionsResponse</code>
