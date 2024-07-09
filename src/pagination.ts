// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { AbstractPage, Response, APIClient, FinalRequestOptions, PageInfo } from './core';

export interface OffsetResponse<Item> {
  data: Array<Item>;

  offset: number | null;

  limit: number | null;
}

export interface OffsetParams {
  offset?: number;

  limit?: number;
}

export class Offset<Item> extends AbstractPage<Item> implements OffsetResponse<Item> {
  data: Array<Item>;

  offset: number | null;

  limit: number | null;

  constructor(
    client: APIClient,
    response: Response,
    body: OffsetResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.data = body.data || [];
    this.offset = body.offset || 0;
    this.limit = body.limit || 0;
  }

  getPaginatedItems(): Item[] {
    return this.data ?? [];
  }

  // @deprecated Please use `nextPageInfo()` instead
  nextPageParams(): Partial<OffsetParams> | null {
    const info = this.nextPageInfo();
    if (!info) return null;
    if ('params' in info) return info.params;
    const params = Object.fromEntries(info.url.searchParams);
    if (!Object.keys(params).length) return null;
    return params;
  }

  nextPageInfo(): PageInfo | null {
    const offset = this.offset;
    if (!offset) {
      return null;
    }

    const length = this.getPaginatedItems().length;
    const currentCount = offset + length;

    return { params: { offset: currentCount } };
  }
}
