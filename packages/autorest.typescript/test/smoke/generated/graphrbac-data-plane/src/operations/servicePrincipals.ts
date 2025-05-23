/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { ServicePrincipals } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { GraphRbacManagementClient } from "../graphRbacManagementClient.js";
import {
  ServicePrincipal,
  ServicePrincipalsListNextOptionalParams,
  ServicePrincipalsListOptionalParams,
  ServicePrincipalsListResponse,
  DirectoryObjectUnion,
  ServicePrincipalsListOwnersNextOptionalParams,
  ServicePrincipalsListOwnersOptionalParams,
  ServicePrincipalsListOwnersResponse,
  KeyCredential,
  ServicePrincipalsListKeyCredentialsOptionalParams,
  ServicePrincipalsListKeyCredentialsResponse,
  PasswordCredential,
  ServicePrincipalsListPasswordCredentialsOptionalParams,
  ServicePrincipalsListPasswordCredentialsResponse,
  ServicePrincipalsListNextResponse,
  ServicePrincipalCreateParameters,
  ServicePrincipalsCreateOptionalParams,
  ServicePrincipalsCreateResponse,
  ServicePrincipalUpdateParameters,
  ServicePrincipalsUpdateOptionalParams,
  ServicePrincipalsDeleteOptionalParams,
  ServicePrincipalsGetOptionalParams,
  ServicePrincipalsGetResponse,
  KeyCredentialsUpdateParameters,
  ServicePrincipalsUpdateKeyCredentialsOptionalParams,
  PasswordCredentialsUpdateParameters,
  ServicePrincipalsUpdatePasswordCredentialsOptionalParams,
  ServicePrincipalsListOwnersNextResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing ServicePrincipals operations. */
export class ServicePrincipalsImpl implements ServicePrincipals {
  private readonly client: GraphRbacManagementClient;

  /**
   * Initialize a new instance of the class ServicePrincipals class.
   * @param client Reference to the service client
   */
  constructor(client: GraphRbacManagementClient) {
    this.client = client;
  }

  /**
   * Gets a list of service principals from the current tenant.
   * @param options The options parameters.
   */
  public list(
    options?: ServicePrincipalsListOptionalParams,
  ): PagedAsyncIterableIterator<ServicePrincipal> {
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
    options?: ServicePrincipalsListOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<ServicePrincipal[]> {
    let result: ServicePrincipalsListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(options);
      let page = result.value || [];
      continuationToken = result.odataNextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(continuationToken, options);
      continuationToken = result.odataNextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    options?: ServicePrincipalsListOptionalParams,
  ): AsyncIterableIterator<ServicePrincipal> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * The owners are a set of non-admin users who are allowed to modify this object.
   * @param objectId The object ID of the service principal for which to get owners.
   * @param options The options parameters.
   */
  public listOwners(
    objectId: string,
    options?: ServicePrincipalsListOwnersOptionalParams,
  ): PagedAsyncIterableIterator<DirectoryObjectUnion> {
    const iter = this.listOwnersPagingAll(objectId, options);
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
        return this.listOwnersPagingPage(objectId, options, settings);
      },
    };
  }

  private async *listOwnersPagingPage(
    objectId: string,
    options?: ServicePrincipalsListOwnersOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<DirectoryObjectUnion[]> {
    let result: ServicePrincipalsListOwnersResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listOwners(objectId, options);
      let page = result.value || [];
      continuationToken = result.odataNextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listOwnersNext(objectId, continuationToken, options);
      continuationToken = result.odataNextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listOwnersPagingAll(
    objectId: string,
    options?: ServicePrincipalsListOwnersOptionalParams,
  ): AsyncIterableIterator<DirectoryObjectUnion> {
    for await (const page of this.listOwnersPagingPage(objectId, options)) {
      yield* page;
    }
  }

  /**
   * Get the keyCredentials associated with the specified service principal.
   * @param objectId The object ID of the service principal for which to get keyCredentials.
   * @param options The options parameters.
   */
  public listKeyCredentials(
    objectId: string,
    options?: ServicePrincipalsListKeyCredentialsOptionalParams,
  ): PagedAsyncIterableIterator<KeyCredential> {
    const iter = this.listKeyCredentialsPagingAll(objectId, options);
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
        return this.listKeyCredentialsPagingPage(objectId, options, settings);
      },
    };
  }

  private async *listKeyCredentialsPagingPage(
    objectId: string,
    options?: ServicePrincipalsListKeyCredentialsOptionalParams,
    _settings?: PageSettings,
  ): AsyncIterableIterator<KeyCredential[]> {
    let result: ServicePrincipalsListKeyCredentialsResponse;
    result = await this._listKeyCredentials(objectId, options);
    yield result.value || [];
  }

  private async *listKeyCredentialsPagingAll(
    objectId: string,
    options?: ServicePrincipalsListKeyCredentialsOptionalParams,
  ): AsyncIterableIterator<KeyCredential> {
    for await (const page of this.listKeyCredentialsPagingPage(
      objectId,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Gets the passwordCredentials associated with a service principal.
   * @param objectId The object ID of the service principal.
   * @param options The options parameters.
   */
  public listPasswordCredentials(
    objectId: string,
    options?: ServicePrincipalsListPasswordCredentialsOptionalParams,
  ): PagedAsyncIterableIterator<PasswordCredential> {
    const iter = this.listPasswordCredentialsPagingAll(objectId, options);
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
        return this.listPasswordCredentialsPagingPage(
          objectId,
          options,
          settings,
        );
      },
    };
  }

  private async *listPasswordCredentialsPagingPage(
    objectId: string,
    options?: ServicePrincipalsListPasswordCredentialsOptionalParams,
    _settings?: PageSettings,
  ): AsyncIterableIterator<PasswordCredential[]> {
    let result: ServicePrincipalsListPasswordCredentialsResponse;
    result = await this._listPasswordCredentials(objectId, options);
    yield result.value || [];
  }

  private async *listPasswordCredentialsPagingAll(
    objectId: string,
    options?: ServicePrincipalsListPasswordCredentialsOptionalParams,
  ): AsyncIterableIterator<PasswordCredential> {
    for await (const page of this.listPasswordCredentialsPagingPage(
      objectId,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Gets a list of service principals from the current tenant.
   * @param nextLink Next link for the list operation.
   * @param options The options parameters.
   */
  public listNext(
    nextLink: string,
    options?: ServicePrincipalsListNextOptionalParams,
  ): PagedAsyncIterableIterator<ServicePrincipal> {
    const iter = this.listNextPagingAll(nextLink, options);
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
        return this.listNextPagingPage(nextLink, options, settings);
      },
    };
  }

  private async *listNextPagingPage(
    nextLink: string,
    options?: ServicePrincipalsListNextOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<ServicePrincipal[]> {
    let result: ServicePrincipalsListNextResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listNext(nextLink, options);
      let page = result.value || [];
      continuationToken = result.odataNextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(continuationToken, options);
      continuationToken = result.odataNextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listNextPagingAll(
    nextLink: string,
    options?: ServicePrincipalsListNextOptionalParams,
  ): AsyncIterableIterator<ServicePrincipal> {
    for await (const page of this.listNextPagingPage(nextLink, options)) {
      yield* page;
    }
  }

  /**
   * Creates a service principal in the directory.
   * @param parameters Parameters to create a service principal.
   * @param options The options parameters.
   */
  create(
    parameters: ServicePrincipalCreateParameters,
    options?: ServicePrincipalsCreateOptionalParams,
  ): Promise<ServicePrincipalsCreateResponse> {
    return this.client.sendOperationRequest(
      { parameters, options },
      createOperationSpec,
    );
  }

  /**
   * Gets a list of service principals from the current tenant.
   * @param options The options parameters.
   */
  private _list(
    options?: ServicePrincipalsListOptionalParams,
  ): Promise<ServicePrincipalsListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
  }

  /**
   * Updates a service principal in the directory.
   * @param objectId The object ID of the service principal to delete.
   * @param parameters Parameters to update a service principal.
   * @param options The options parameters.
   */
  update(
    objectId: string,
    parameters: ServicePrincipalUpdateParameters,
    options?: ServicePrincipalsUpdateOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { objectId, parameters, options },
      updateOperationSpec,
    );
  }

  /**
   * Deletes a service principal from the directory.
   * @param objectId The object ID of the service principal to delete.
   * @param options The options parameters.
   */
  delete(
    objectId: string,
    options?: ServicePrincipalsDeleteOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { objectId, options },
      deleteOperationSpec,
    );
  }

  /**
   * Gets service principal information from the directory. Query by objectId or pass a filter to query
   * by appId
   * @param objectId The object ID of the service principal to get.
   * @param options The options parameters.
   */
  get(
    objectId: string,
    options?: ServicePrincipalsGetOptionalParams,
  ): Promise<ServicePrincipalsGetResponse> {
    return this.client.sendOperationRequest(
      { objectId, options },
      getOperationSpec,
    );
  }

  /**
   * The owners are a set of non-admin users who are allowed to modify this object.
   * @param objectId The object ID of the service principal for which to get owners.
   * @param options The options parameters.
   */
  private _listOwners(
    objectId: string,
    options?: ServicePrincipalsListOwnersOptionalParams,
  ): Promise<ServicePrincipalsListOwnersResponse> {
    return this.client.sendOperationRequest(
      { objectId, options },
      listOwnersOperationSpec,
    );
  }

  /**
   * Get the keyCredentials associated with the specified service principal.
   * @param objectId The object ID of the service principal for which to get keyCredentials.
   * @param options The options parameters.
   */
  private _listKeyCredentials(
    objectId: string,
    options?: ServicePrincipalsListKeyCredentialsOptionalParams,
  ): Promise<ServicePrincipalsListKeyCredentialsResponse> {
    return this.client.sendOperationRequest(
      { objectId, options },
      listKeyCredentialsOperationSpec,
    );
  }

  /**
   * Update the keyCredentials associated with a service principal.
   * @param objectId The object ID for which to get service principal information.
   * @param parameters Parameters to update the keyCredentials of an existing service principal.
   * @param options The options parameters.
   */
  updateKeyCredentials(
    objectId: string,
    parameters: KeyCredentialsUpdateParameters,
    options?: ServicePrincipalsUpdateKeyCredentialsOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { objectId, parameters, options },
      updateKeyCredentialsOperationSpec,
    );
  }

  /**
   * Gets the passwordCredentials associated with a service principal.
   * @param objectId The object ID of the service principal.
   * @param options The options parameters.
   */
  private _listPasswordCredentials(
    objectId: string,
    options?: ServicePrincipalsListPasswordCredentialsOptionalParams,
  ): Promise<ServicePrincipalsListPasswordCredentialsResponse> {
    return this.client.sendOperationRequest(
      { objectId, options },
      listPasswordCredentialsOperationSpec,
    );
  }

  /**
   * Updates the passwordCredentials associated with a service principal.
   * @param objectId The object ID of the service principal.
   * @param parameters Parameters to update the passwordCredentials of an existing service principal.
   * @param options The options parameters.
   */
  updatePasswordCredentials(
    objectId: string,
    parameters: PasswordCredentialsUpdateParameters,
    options?: ServicePrincipalsUpdatePasswordCredentialsOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { objectId, parameters, options },
      updatePasswordCredentialsOperationSpec,
    );
  }

  /**
   * Gets a list of service principals from the current tenant.
   * @param nextLink Next link for the list operation.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: ServicePrincipalsListNextOptionalParams,
  ): Promise<ServicePrincipalsListNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listNextOperationSpec,
    );
  }

  /**
   * ListOwnersNext
   * @param objectId The object ID of the service principal for which to get owners.
   * @param nextLink The nextLink from the previous successful call to the ListOwners method.
   * @param options The options parameters.
   */
  private _listOwnersNext(
    objectId: string,
    nextLink: string,
    options?: ServicePrincipalsListOwnersNextOptionalParams,
  ): Promise<ServicePrincipalsListOwnersNextResponse> {
    return this.client.sendOperationRequest(
      { objectId, nextLink, options },
      listOwnersNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOperationSpec: coreClient.OperationSpec = {
  path: "/{tenantID}/servicePrincipals",
  httpMethod: "POST",
  responses: {
    201: {
      bodyMapper: Mappers.ServicePrincipal,
    },
    default: {
      bodyMapper: Mappers.GraphError,
    },
  },
  requestBody: Parameters.parameters9,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.tenantID],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const listOperationSpec: coreClient.OperationSpec = {
  path: "/{tenantID}/servicePrincipals",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ServicePrincipalListResult,
    },
    default: {
      bodyMapper: Mappers.GraphError,
    },
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter],
  urlParameters: [Parameters.$host, Parameters.tenantID],
  headerParameters: [Parameters.accept],
  serializer,
};
const updateOperationSpec: coreClient.OperationSpec = {
  path: "/{tenantID}/servicePrincipals/{objectId}",
  httpMethod: "PATCH",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.GraphError,
    },
  },
  requestBody: Parameters.parameters10,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.tenantID, Parameters.objectId],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/{tenantID}/servicePrincipals/{objectId}",
  httpMethod: "DELETE",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.GraphError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.tenantID, Parameters.objectId],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/{tenantID}/servicePrincipals/{objectId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ServicePrincipal,
    },
    default: {
      bodyMapper: Mappers.GraphError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.tenantID, Parameters.objectId],
  headerParameters: [Parameters.accept],
  serializer,
};
const listOwnersOperationSpec: coreClient.OperationSpec = {
  path: "/{tenantID}/servicePrincipals/{objectId}/owners",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DirectoryObjectListResult,
    },
    default: {
      bodyMapper: Mappers.GraphError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.tenantID, Parameters.objectId],
  headerParameters: [Parameters.accept],
  serializer,
};
const listKeyCredentialsOperationSpec: coreClient.OperationSpec = {
  path: "/{tenantID}/servicePrincipals/{objectId}/keyCredentials",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.KeyCredentialListResult,
    },
    default: {
      bodyMapper: Mappers.GraphError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.tenantID, Parameters.objectId],
  headerParameters: [Parameters.accept],
  serializer,
};
const updateKeyCredentialsOperationSpec: coreClient.OperationSpec = {
  path: "/{tenantID}/servicePrincipals/{objectId}/keyCredentials",
  httpMethod: "PATCH",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.GraphError,
    },
  },
  requestBody: Parameters.parameters3,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.tenantID, Parameters.objectId],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const listPasswordCredentialsOperationSpec: coreClient.OperationSpec = {
  path: "/{tenantID}/servicePrincipals/{objectId}/passwordCredentials",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PasswordCredentialListResult,
    },
    default: {
      bodyMapper: Mappers.GraphError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.tenantID, Parameters.objectId],
  headerParameters: [Parameters.accept],
  serializer,
};
const updatePasswordCredentialsOperationSpec: coreClient.OperationSpec = {
  path: "/{tenantID}/servicePrincipals/{objectId}/passwordCredentials",
  httpMethod: "PATCH",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.GraphError,
    },
  },
  requestBody: Parameters.parameters4,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.tenantID, Parameters.objectId],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "/{tenantID}/{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ServicePrincipalListResult,
    },
    default: {
      bodyMapper: Mappers.GraphError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.tenantID, Parameters.nextLink],
  headerParameters: [Parameters.accept],
  serializer,
};
const listOwnersNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DirectoryObjectListResult,
    },
    default: {
      bodyMapper: Mappers.GraphError,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.tenantID,
    Parameters.nextLink,
    Parameters.objectId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
