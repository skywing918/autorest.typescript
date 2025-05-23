/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { Subscriptions } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { SubscriptionClient } from "../subscriptionClient.js";
import {
  Location,
  SubscriptionsListLocationsOptionalParams,
  SubscriptionsListLocationsResponse,
  Subscription,
  SubscriptionsListNextOptionalParams,
  SubscriptionsListOptionalParams,
  SubscriptionsListResponse,
  SubscriptionsGetOptionalParams,
  SubscriptionsGetResponse,
  SubscriptionsListNextResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing Subscriptions operations. */
export class SubscriptionsImpl implements Subscriptions {
  private readonly client: SubscriptionClient;

  /**
   * Initialize a new instance of the class Subscriptions class.
   * @param client Reference to the service client
   */
  constructor(client: SubscriptionClient) {
    this.client = client;
  }

  /**
   * This operation provides all the locations that are available for resource providers; however, each
   * resource provider may support a subset of this list.
   * @param subscriptionId The ID of the target subscription.
   * @param options The options parameters.
   */
  public listLocations(
    subscriptionId: string,
    options?: SubscriptionsListLocationsOptionalParams,
  ): PagedAsyncIterableIterator<Location> {
    const iter = this.listLocationsPagingAll(subscriptionId, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listLocationsPagingPage(subscriptionId, options, settings);
      },
    };
  }

  private async *listLocationsPagingPage(
    subscriptionId: string,
    options?: SubscriptionsListLocationsOptionalParams,
    _settings?: PageSettings,
  ): AsyncIterableIterator<Location[]> {
    let result: SubscriptionsListLocationsResponse;
    result = await this._listLocations(subscriptionId, options);
    yield result.value || [];
  }

  private async *listLocationsPagingAll(
    subscriptionId: string,
    options?: SubscriptionsListLocationsOptionalParams,
  ): AsyncIterableIterator<Location> {
    for await (const page of this.listLocationsPagingPage(
      subscriptionId,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Gets all subscriptions for a tenant.
   * @param options The options parameters.
   */
  public list(
    options?: SubscriptionsListOptionalParams,
  ): PagedAsyncIterableIterator<Subscription> {
    const iter = this.listPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listPagingPage(options, settings);
      },
    };
  }

  private async *listPagingPage(
    options?: SubscriptionsListOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<Subscription[]> {
    let result: SubscriptionsListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(continuationToken, options);
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    options?: SubscriptionsListOptionalParams,
  ): AsyncIterableIterator<Subscription> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * This operation provides all the locations that are available for resource providers; however, each
   * resource provider may support a subset of this list.
   * @param subscriptionId The ID of the target subscription.
   * @param options The options parameters.
   */
  private _listLocations(
    subscriptionId: string,
    options?: SubscriptionsListLocationsOptionalParams,
  ): Promise<SubscriptionsListLocationsResponse> {
    return this.client.sendOperationRequest(
      { subscriptionId, options },
      listLocationsOperationSpec,
    );
  }

  /**
   * Gets details about a specified subscription.
   * @param subscriptionId The ID of the target subscription.
   * @param options The options parameters.
   */
  get(
    subscriptionId: string,
    options?: SubscriptionsGetOptionalParams,
  ): Promise<SubscriptionsGetResponse> {
    return this.client.sendOperationRequest(
      { subscriptionId, options },
      getOperationSpec,
    );
  }

  /**
   * Gets all subscriptions for a tenant.
   * @param options The options parameters.
   */
  private _list(
    options?: SubscriptionsListOptionalParams,
  ): Promise<SubscriptionsListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: SubscriptionsListNextOptionalParams,
  ): Promise<SubscriptionsListNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listLocationsOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/locations",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LocationListResult,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Subscription,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer,
};
const listOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SubscriptionListResult,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer,
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SubscriptionListResult,
    },
  },
  urlParameters: [Parameters.$host, Parameters.nextLink],
  headerParameters: [Parameters.accept],
  serializer,
};
