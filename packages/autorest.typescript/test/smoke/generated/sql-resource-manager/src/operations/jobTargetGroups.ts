/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { JobTargetGroups } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { SqlManagementClient } from "../sqlManagementClient.js";
import {
  JobTargetGroup,
  JobTargetGroupsListByAgentNextOptionalParams,
  JobTargetGroupsListByAgentOptionalParams,
  JobTargetGroupsListByAgentResponse,
  JobTargetGroupsGetOptionalParams,
  JobTargetGroupsGetResponse,
  JobTargetGroupsCreateOrUpdateOptionalParams,
  JobTargetGroupsCreateOrUpdateResponse,
  JobTargetGroupsDeleteOptionalParams,
  JobTargetGroupsListByAgentNextResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing JobTargetGroups operations. */
export class JobTargetGroupsImpl implements JobTargetGroups {
  private readonly client: SqlManagementClient;

  /**
   * Initialize a new instance of the class JobTargetGroups class.
   * @param client Reference to the service client
   */
  constructor(client: SqlManagementClient) {
    this.client = client;
  }

  /**
   * Gets all target groups in an agent.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent.
   * @param options The options parameters.
   */
  public listByAgent(
    resourceGroupName: string,
    serverName: string,
    jobAgentName: string,
    options?: JobTargetGroupsListByAgentOptionalParams,
  ): PagedAsyncIterableIterator<JobTargetGroup> {
    const iter = this.listByAgentPagingAll(
      resourceGroupName,
      serverName,
      jobAgentName,
      options,
    );
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
        return this.listByAgentPagingPage(
          resourceGroupName,
          serverName,
          jobAgentName,
          options,
          settings,
        );
      },
    };
  }

  private async *listByAgentPagingPage(
    resourceGroupName: string,
    serverName: string,
    jobAgentName: string,
    options?: JobTargetGroupsListByAgentOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<JobTargetGroup[]> {
    let result: JobTargetGroupsListByAgentResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByAgent(
        resourceGroupName,
        serverName,
        jobAgentName,
        options,
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByAgentNext(
        resourceGroupName,
        serverName,
        jobAgentName,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByAgentPagingAll(
    resourceGroupName: string,
    serverName: string,
    jobAgentName: string,
    options?: JobTargetGroupsListByAgentOptionalParams,
  ): AsyncIterableIterator<JobTargetGroup> {
    for await (const page of this.listByAgentPagingPage(
      resourceGroupName,
      serverName,
      jobAgentName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Gets all target groups in an agent.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent.
   * @param options The options parameters.
   */
  private _listByAgent(
    resourceGroupName: string,
    serverName: string,
    jobAgentName: string,
    options?: JobTargetGroupsListByAgentOptionalParams,
  ): Promise<JobTargetGroupsListByAgentResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serverName, jobAgentName, options },
      listByAgentOperationSpec,
    );
  }

  /**
   * Gets a target group.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent.
   * @param targetGroupName The name of the target group.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serverName: string,
    jobAgentName: string,
    targetGroupName: string,
    options?: JobTargetGroupsGetOptionalParams,
  ): Promise<JobTargetGroupsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serverName, jobAgentName, targetGroupName, options },
      getOperationSpec,
    );
  }

  /**
   * Creates or updates a target group.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent.
   * @param targetGroupName The name of the target group.
   * @param parameters The requested state of the target group.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    serverName: string,
    jobAgentName: string,
    targetGroupName: string,
    parameters: JobTargetGroup,
    options?: JobTargetGroupsCreateOrUpdateOptionalParams,
  ): Promise<JobTargetGroupsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        jobAgentName,
        targetGroupName,
        parameters,
        options,
      },
      createOrUpdateOperationSpec,
    );
  }

  /**
   * Deletes a target group.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent.
   * @param targetGroupName The name of the target group.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    serverName: string,
    jobAgentName: string,
    targetGroupName: string,
    options?: JobTargetGroupsDeleteOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serverName, jobAgentName, targetGroupName, options },
      deleteOperationSpec,
    );
  }

  /**
   * ListByAgentNext
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param jobAgentName The name of the job agent.
   * @param nextLink The nextLink from the previous successful call to the ListByAgent method.
   * @param options The options parameters.
   */
  private _listByAgentNext(
    resourceGroupName: string,
    serverName: string,
    jobAgentName: string,
    nextLink: string,
    options?: JobTargetGroupsListByAgentNextOptionalParams,
  ): Promise<JobTargetGroupsListByAgentNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serverName, jobAgentName, nextLink, options },
      listByAgentNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByAgentOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/jobAgents/{jobAgentName}/targetGroups",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.JobTargetGroupListResult,
    },
    default: {},
  },
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.jobAgentName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/jobAgents/{jobAgentName}/targetGroups/{targetGroupName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.JobTargetGroup,
    },
    default: {},
  },
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.jobAgentName,
    Parameters.targetGroupName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/jobAgents/{jobAgentName}/targetGroups/{targetGroupName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.JobTargetGroup,
    },
    201: {
      bodyMapper: Mappers.JobTargetGroup,
    },
    default: {},
  },
  requestBody: Parameters.parameters35,
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.jobAgentName,
    Parameters.targetGroupName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/jobAgents/{jobAgentName}/targetGroups/{targetGroupName}",
  httpMethod: "DELETE",
  responses: { 200: {}, 204: {}, default: {} },
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.jobAgentName,
    Parameters.targetGroupName,
  ],
  serializer,
};
const listByAgentNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.JobTargetGroupListResult,
    },
    default: {},
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.nextLink,
    Parameters.jobAgentName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
