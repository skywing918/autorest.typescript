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
  ApplicationDefinition,
  ApplicationDefinitionsListByResourceGroupOptionalParams,
  ApplicationDefinitionsGetOptionalParams,
  ApplicationDefinitionsGetResponse,
  ApplicationDefinitionsDeleteOptionalParams,
  ApplicationDefinitionsCreateOrUpdateOptionalParams,
  ApplicationDefinitionsCreateOrUpdateResponse,
  ApplicationDefinitionsGetByIdOptionalParams,
  ApplicationDefinitionsGetByIdResponse,
  ApplicationDefinitionsDeleteByIdOptionalParams,
  ApplicationDefinitionsCreateOrUpdateByIdOptionalParams,
  ApplicationDefinitionsCreateOrUpdateByIdResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ApplicationDefinitions. */
export interface ApplicationDefinitions {
  /**
   * Lists the managed application definitions in a resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: ApplicationDefinitionsListByResourceGroupOptionalParams,
  ): PagedAsyncIterableIterator<ApplicationDefinition>;
  /**
   * Gets the managed application definition.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param applicationDefinitionName The name of the managed application definition.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    applicationDefinitionName: string,
    options?: ApplicationDefinitionsGetOptionalParams,
  ): Promise<ApplicationDefinitionsGetResponse>;
  /**
   * Deletes the managed application definition.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param applicationDefinitionName The name of the managed application definition to delete.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    applicationDefinitionName: string,
    options?: ApplicationDefinitionsDeleteOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Deletes the managed application definition.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param applicationDefinitionName The name of the managed application definition to delete.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    applicationDefinitionName: string,
    options?: ApplicationDefinitionsDeleteOptionalParams,
  ): Promise<void>;
  /**
   * Creates a new managed application definition.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param applicationDefinitionName The name of the managed application definition.
   * @param parameters Parameters supplied to the create or update an managed application definition.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    applicationDefinitionName: string,
    parameters: ApplicationDefinition,
    options?: ApplicationDefinitionsCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ApplicationDefinitionsCreateOrUpdateResponse>,
      ApplicationDefinitionsCreateOrUpdateResponse
    >
  >;
  /**
   * Creates a new managed application definition.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param applicationDefinitionName The name of the managed application definition.
   * @param parameters Parameters supplied to the create or update an managed application definition.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    applicationDefinitionName: string,
    parameters: ApplicationDefinition,
    options?: ApplicationDefinitionsCreateOrUpdateOptionalParams,
  ): Promise<ApplicationDefinitionsCreateOrUpdateResponse>;
  /**
   * Gets the managed application definition.
   * @param applicationDefinitionId The fully qualified ID of the managed application definition,
   *                                including the managed application name and the managed application definition resource type. Use the
   *                                format,
   *                                /subscriptions/{guid}/resourceGroups/{resource-group-name}/Microsoft.Solutions/applicationDefinitions/{applicationDefinition-name}
   * @param options The options parameters.
   */
  getById(
    applicationDefinitionId: string,
    options?: ApplicationDefinitionsGetByIdOptionalParams,
  ): Promise<ApplicationDefinitionsGetByIdResponse>;
  /**
   * Deletes the managed application definition.
   * @param applicationDefinitionId The fully qualified ID of the managed application definition,
   *                                including the managed application name and the managed application definition resource type. Use the
   *                                format,
   *                                /subscriptions/{guid}/resourceGroups/{resource-group-name}/Microsoft.Solutions/applicationDefinitions/{applicationDefinition-name}
   * @param options The options parameters.
   */
  beginDeleteById(
    applicationDefinitionId: string,
    options?: ApplicationDefinitionsDeleteByIdOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Deletes the managed application definition.
   * @param applicationDefinitionId The fully qualified ID of the managed application definition,
   *                                including the managed application name and the managed application definition resource type. Use the
   *                                format,
   *                                /subscriptions/{guid}/resourceGroups/{resource-group-name}/Microsoft.Solutions/applicationDefinitions/{applicationDefinition-name}
   * @param options The options parameters.
   */
  beginDeleteByIdAndWait(
    applicationDefinitionId: string,
    options?: ApplicationDefinitionsDeleteByIdOptionalParams,
  ): Promise<void>;
  /**
   * Creates a new managed application definition.
   * @param applicationDefinitionId The fully qualified ID of the managed application definition,
   *                                including the managed application name and the managed application definition resource type. Use the
   *                                format,
   *                                /subscriptions/{guid}/resourceGroups/{resource-group-name}/Microsoft.Solutions/applicationDefinitions/{applicationDefinition-name}
   * @param parameters Parameters supplied to the create or update a managed application definition.
   * @param options The options parameters.
   */
  beginCreateOrUpdateById(
    applicationDefinitionId: string,
    parameters: ApplicationDefinition,
    options?: ApplicationDefinitionsCreateOrUpdateByIdOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ApplicationDefinitionsCreateOrUpdateByIdResponse>,
      ApplicationDefinitionsCreateOrUpdateByIdResponse
    >
  >;
  /**
   * Creates a new managed application definition.
   * @param applicationDefinitionId The fully qualified ID of the managed application definition,
   *                                including the managed application name and the managed application definition resource type. Use the
   *                                format,
   *                                /subscriptions/{guid}/resourceGroups/{resource-group-name}/Microsoft.Solutions/applicationDefinitions/{applicationDefinition-name}
   * @param parameters Parameters supplied to the create or update a managed application definition.
   * @param options The options parameters.
   */
  beginCreateOrUpdateByIdAndWait(
    applicationDefinitionId: string,
    parameters: ApplicationDefinition,
    options?: ApplicationDefinitionsCreateOrUpdateByIdOptionalParams,
  ): Promise<ApplicationDefinitionsCreateOrUpdateByIdResponse>;
}
