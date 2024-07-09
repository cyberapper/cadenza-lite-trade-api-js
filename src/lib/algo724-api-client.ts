import createClient, { Middleware } from 'openapi-fetch';
import { paths } from './algo724-openapi';
import pino from 'pino';

export class Algo724Client {
  private logger = pino();
  private accessToken: string | null = null;
  public client = createClient<paths>({
    keepalive: true,
    baseUrl: 'https://cadenza-lite.uat.algo724.com',
  });

  constructor(token: string) {
    this.accessToken = token;
    this.configureClient();
  }

  private configureClient() {
    const accessToken = this.accessToken;
    const logger = this.logger;
    const logMiddleware: Middleware = {
      async onRequest(req, options) {
        const cloneReq = req.clone();
        const text = await cloneReq.text();
        if (req.method === 'POST' || req.method === 'PUT' || req.method === 'PATCH') {
          const body = JSON.parse(text);
          // log request
          logger.info(
            {
              method: req.method,
              url: req.url,
              body,
            },
            `HTTP ${req.method} ${req.url}`,
          );
          return req;
        }

        logger.info(
          {
            method: req.method,
            url: req.url,
            params: req.params,
          },
          `HTTP ${req.method} ${req.url}`,
        );
        return req;
      },
      async onResponse(res, options) {
        // log response
        if (res.status >= 500) {
          logger.error(`HTTP ${res.status} ${res.url}`);
        } else if (res.status >= 400) {
          const body = await res.clone().json();
          logger.warn(
            {
              response: body,
            },
            `HTTP ${res.status} ${res.url}`,
          );
        } else {
          logger.info(`HTTP ${res.status} ${res.url}`);
        }
        // const resClone = res.clone();
        // console.debug(await resClone.json());
        return res;
      },
    };
    const authMiddleware: Middleware = {
      async onRequest(req, options) {
        // set "foo" header
        req.headers.set('content-type', 'application/json');
        req.headers.set('authorization', `Bearer ${accessToken}`);
        return req;
      },
      async onResponse(res, options) {
        // change status of response
        return res;
      },
    };

    this.client.use(authMiddleware, logMiddleware);
    return this.client;
  }
}
