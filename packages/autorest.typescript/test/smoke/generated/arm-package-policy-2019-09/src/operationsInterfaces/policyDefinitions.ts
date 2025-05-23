/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  PolicyDefinition,
  PolicyDefinitionsListOptionalParams,
  PolicyDefinitionsListBuiltInOptionalParams,
  PolicyDefinitionsListByManagementGroupOptionalParams,
  PolicyDefinitionsCreateOrUpdateOptionalParams,
  PolicyDefinitionsCreateOrUpdateResponse,
  PolicyDefinitionsDeleteOptionalParams,
  PolicyDefinitionsGetOptionalParams,
  PolicyDefinitionsGetResponse,
  PolicyDefinitionsGetBuiltInOptionalParams,
  PolicyDefinitionsGetBuiltInResponse,
  PolicyDefinitionsCreateOrUpdateAtManagementGroupOptionalParams,
  PolicyDefinitionsCreateOrUpdateAtManagementGroupResponse,
  PolicyDefinitionsDeleteAtManagementGroupOptionalParams,
  PolicyDefinitionsGetAtManagementGroupOptionalParams,
  PolicyDefinitionsGetAtManagementGroupResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a PolicyDefinitions. */
export interface PolicyDefinitions {
  /**
   * This operation retrieves a list of all the policy definitions in a given subscription.
   * @param options The options parameters.
   */
  list(
    options?: PolicyDefinitionsListOptionalParams,
  ): PagedAsyncIterableIterator<PolicyDefinition>;
  /**
   * This operation retrieves a list of all the built-in policy definitions.
   * @param options The options parameters.
   */
  listBuiltIn(
    options?: PolicyDefinitionsListBuiltInOptionalParams,
  ): PagedAsyncIterableIterator<PolicyDefinition>;
  /**
   * This operation retrieves a list of all the policy definitions in a given management group.
   * @param managementGroupId The ID of the management group.
   * @param options The options parameters.
   */
  listByManagementGroup(
    managementGroupId: string,
    options?: PolicyDefinitionsListByManagementGroupOptionalParams,
  ): PagedAsyncIterableIterator<PolicyDefinition>;
  /**
   * This operation creates or updates a policy definition in the given subscription with the given name.
   * @param policyDefinitionName The name of the policy definition to create.
   * @param parameters The policy definition properties.
   * @param options The options parameters.
   */
  createOrUpdate(
    policyDefinitionName: string,
    parameters: PolicyDefinition,
    options?: PolicyDefinitionsCreateOrUpdateOptionalParams,
  ): Promise<PolicyDefinitionsCreateOrUpdateResponse>;
  /**
   * This operation deletes the policy definition in the given subscription with the given name.
   * @param policyDefinitionName The name of the policy definition to delete.
   * @param options The options parameters.
   */
  delete(
    policyDefinitionName: string,
    options?: PolicyDefinitionsDeleteOptionalParams,
  ): Promise<void>;
  /**
   * This operation retrieves the policy definition in the given subscription with the given name.
   * @param policyDefinitionName The name of the policy definition to get.
   * @param options The options parameters.
   */
  get(
    policyDefinitionName: string,
    options?: PolicyDefinitionsGetOptionalParams,
  ): Promise<PolicyDefinitionsGetResponse>;
  /**
   * This operation retrieves the built-in policy definition with the given name.
   * @param policyDefinitionName The name of the built-in policy definition to get.
   * @param options The options parameters.
   */
  getBuiltIn(
    policyDefinitionName: string,
    options?: PolicyDefinitionsGetBuiltInOptionalParams,
  ): Promise<PolicyDefinitionsGetBuiltInResponse>;
  /**
   * This operation creates or updates a policy definition in the given management group with the given
   * name.
   * @param policyDefinitionName The name of the policy definition to create.
   * @param managementGroupId The ID of the management group.
   * @param parameters The policy definition properties.
   * @param options The options parameters.
   */
  createOrUpdateAtManagementGroup(
    policyDefinitionName: string,
    managementGroupId: string,
    parameters: PolicyDefinition,
    options?: PolicyDefinitionsCreateOrUpdateAtManagementGroupOptionalParams,
  ): Promise<PolicyDefinitionsCreateOrUpdateAtManagementGroupResponse>;
  /**
   * This operation deletes the policy definition in the given management group with the given name.
   * @param policyDefinitionName The name of the policy definition to delete.
   * @param managementGroupId The ID of the management group.
   * @param options The options parameters.
   */
  deleteAtManagementGroup(
    policyDefinitionName: string,
    managementGroupId: string,
    options?: PolicyDefinitionsDeleteAtManagementGroupOptionalParams,
  ): Promise<void>;
  /**
   * This operation retrieves the policy definition in the given management group with the given name.
   * @param policyDefinitionName The name of the policy definition to get.
   * @param managementGroupId The ID of the management group.
   * @param options The options parameters.
   */
  getAtManagementGroup(
    policyDefinitionName: string,
    managementGroupId: string,
    options?: PolicyDefinitionsGetAtManagementGroupOptionalParams,
  ): Promise<PolicyDefinitionsGetAtManagementGroupResponse>;
}
