/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { SimplePollerLike, OperationState } from "@azure/core-lro";
import {
  DeploymentScriptUnion,
  DeploymentScriptsListBySubscriptionOptionalParams,
  DeploymentScriptsListByResourceGroupOptionalParams,
  DeploymentScriptsCreateOptionalParams,
  DeploymentScriptsCreateResponse,
  DeploymentScriptsUpdateOptionalParams,
  DeploymentScriptsUpdateResponse,
  DeploymentScriptsGetOptionalParams,
  DeploymentScriptsGetResponse,
  DeploymentScriptsDeleteOptionalParams,
  DeploymentScriptsGetLogsOptionalParams,
  DeploymentScriptsGetLogsResponse,
  DeploymentScriptsGetLogsDefaultOptionalParams,
  DeploymentScriptsGetLogsDefaultResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a DeploymentScripts. */
export interface DeploymentScripts {
  /**
   * Lists all deployment scripts for a given subscription.
   * @param options The options parameters.
   */
  listBySubscription(
    options?: DeploymentScriptsListBySubscriptionOptionalParams,
  ): PagedAsyncIterableIterator<DeploymentScriptUnion>;
  /**
   * Lists deployments scripts.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: DeploymentScriptsListByResourceGroupOptionalParams,
  ): PagedAsyncIterableIterator<DeploymentScriptUnion>;
  /**
   * Creates a deployment script.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param scriptName Name of the deployment script.
   * @param deploymentScript Deployment script supplied to the operation.
   * @param options The options parameters.
   */
  beginCreate(
    resourceGroupName: string,
    scriptName: string,
    deploymentScript: DeploymentScriptUnion,
    options?: DeploymentScriptsCreateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<DeploymentScriptsCreateResponse>,
      DeploymentScriptsCreateResponse
    >
  >;
  /**
   * Creates a deployment script.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param scriptName Name of the deployment script.
   * @param deploymentScript Deployment script supplied to the operation.
   * @param options The options parameters.
   */
  beginCreateAndWait(
    resourceGroupName: string,
    scriptName: string,
    deploymentScript: DeploymentScriptUnion,
    options?: DeploymentScriptsCreateOptionalParams,
  ): Promise<DeploymentScriptsCreateResponse>;
  /**
   * Updates deployment script tags with specified values.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param scriptName Name of the deployment script.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    scriptName: string,
    options?: DeploymentScriptsUpdateOptionalParams,
  ): Promise<DeploymentScriptsUpdateResponse>;
  /**
   * Gets a deployment script with a given name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param scriptName Name of the deployment script.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    scriptName: string,
    options?: DeploymentScriptsGetOptionalParams,
  ): Promise<DeploymentScriptsGetResponse>;
  /**
   * Deletes a deployment script. When operation completes, status code 200 returned without content.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param scriptName Name of the deployment script.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    scriptName: string,
    options?: DeploymentScriptsDeleteOptionalParams,
  ): Promise<void>;
  /**
   * Gets deployment script logs for a given deployment script name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param scriptName Name of the deployment script.
   * @param options The options parameters.
   */
  getLogs(
    resourceGroupName: string,
    scriptName: string,
    options?: DeploymentScriptsGetLogsOptionalParams,
  ): Promise<DeploymentScriptsGetLogsResponse>;
  /**
   * Gets deployment script logs for a given deployment script name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param scriptName Name of the deployment script.
   * @param options The options parameters.
   */
  getLogsDefault(
    resourceGroupName: string,
    scriptName: string,
    options?: DeploymentScriptsGetLogsDefaultOptionalParams,
  ): Promise<DeploymentScriptsGetLogsDefaultResponse>;
}
