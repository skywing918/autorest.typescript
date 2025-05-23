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
  VirtualMachine,
  VirtualMachinesListByLocationOptionalParams,
  VirtualMachinesListOptionalParams,
  VirtualMachinesListAllOptionalParams,
  VirtualMachineSize,
  VirtualMachinesListAvailableSizesOptionalParams,
  VirtualMachineCaptureParameters,
  VirtualMachinesCaptureOptionalParams,
  VirtualMachinesCaptureResponse,
  VirtualMachinesCreateOrUpdateOptionalParams,
  VirtualMachinesCreateOrUpdateResponse,
  VirtualMachineUpdate,
  VirtualMachinesUpdateOptionalParams,
  VirtualMachinesUpdateResponse,
  VirtualMachinesDeleteOptionalParams,
  VirtualMachinesGetOptionalParams,
  VirtualMachinesGetResponse,
  VirtualMachinesInstanceViewOptionalParams,
  VirtualMachinesInstanceViewResponse,
  VirtualMachinesConvertToManagedDisksOptionalParams,
  VirtualMachinesDeallocateOptionalParams,
  VirtualMachinesGeneralizeOptionalParams,
  VirtualMachinesPowerOffOptionalParams,
  VirtualMachinesReapplyOptionalParams,
  VirtualMachinesRestartOptionalParams,
  VirtualMachinesStartOptionalParams,
  VirtualMachinesRedeployOptionalParams,
  VirtualMachinesReimageOptionalParams,
  VirtualMachinesRetrieveBootDiagnosticsDataOptionalParams,
  VirtualMachinesRetrieveBootDiagnosticsDataResponse,
  VirtualMachinesPerformMaintenanceOptionalParams,
  VirtualMachinesSimulateEvictionOptionalParams,
  VirtualMachinesAssessPatchesOptionalParams,
  VirtualMachinesAssessPatchesResponse,
  VirtualMachineInstallPatchesParameters,
  VirtualMachinesInstallPatchesOptionalParams,
  VirtualMachinesInstallPatchesResponse,
  RunCommandInput,
  VirtualMachinesRunCommandOptionalParams,
  VirtualMachinesRunCommandResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a VirtualMachines. */
export interface VirtualMachines {
  /**
   * Gets all the virtual machines under the specified subscription for the specified location.
   * @param location The location for which virtual machines under the subscription are queried.
   * @param options The options parameters.
   */
  listByLocation(
    location: string,
    options?: VirtualMachinesListByLocationOptionalParams,
  ): PagedAsyncIterableIterator<VirtualMachine>;
  /**
   * Lists all of the virtual machines in the specified resource group. Use the nextLink property in the
   * response to get the next page of virtual machines.
   * @param resourceGroupName The name of the resource group.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    options?: VirtualMachinesListOptionalParams,
  ): PagedAsyncIterableIterator<VirtualMachine>;
  /**
   * Lists all of the virtual machines in the specified subscription. Use the nextLink property in the
   * response to get the next page of virtual machines.
   * @param options The options parameters.
   */
  listAll(
    options?: VirtualMachinesListAllOptionalParams,
  ): PagedAsyncIterableIterator<VirtualMachine>;
  /**
   * Lists all available virtual machine sizes to which the specified virtual machine can be resized.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine.
   * @param options The options parameters.
   */
  listAvailableSizes(
    resourceGroupName: string,
    vmName: string,
    options?: VirtualMachinesListAvailableSizesOptionalParams,
  ): PagedAsyncIterableIterator<VirtualMachineSize>;
  /**
   * Captures the VM by copying virtual hard disks of the VM and outputs a template that can be used to
   * create similar VMs.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine.
   * @param parameters Parameters supplied to the Capture Virtual Machine operation.
   * @param options The options parameters.
   */
  beginCapture(
    resourceGroupName: string,
    vmName: string,
    parameters: VirtualMachineCaptureParameters,
    options?: VirtualMachinesCaptureOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<VirtualMachinesCaptureResponse>,
      VirtualMachinesCaptureResponse
    >
  >;
  /**
   * Captures the VM by copying virtual hard disks of the VM and outputs a template that can be used to
   * create similar VMs.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine.
   * @param parameters Parameters supplied to the Capture Virtual Machine operation.
   * @param options The options parameters.
   */
  beginCaptureAndWait(
    resourceGroupName: string,
    vmName: string,
    parameters: VirtualMachineCaptureParameters,
    options?: VirtualMachinesCaptureOptionalParams,
  ): Promise<VirtualMachinesCaptureResponse>;
  /**
   * The operation to create or update a virtual machine. Please note some properties can be set only
   * during virtual machine creation.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine.
   * @param parameters Parameters supplied to the Create Virtual Machine operation.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    vmName: string,
    parameters: VirtualMachine,
    options?: VirtualMachinesCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<VirtualMachinesCreateOrUpdateResponse>,
      VirtualMachinesCreateOrUpdateResponse
    >
  >;
  /**
   * The operation to create or update a virtual machine. Please note some properties can be set only
   * during virtual machine creation.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine.
   * @param parameters Parameters supplied to the Create Virtual Machine operation.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    vmName: string,
    parameters: VirtualMachine,
    options?: VirtualMachinesCreateOrUpdateOptionalParams,
  ): Promise<VirtualMachinesCreateOrUpdateResponse>;
  /**
   * The operation to update a virtual machine.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine.
   * @param parameters Parameters supplied to the Update Virtual Machine operation.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    vmName: string,
    parameters: VirtualMachineUpdate,
    options?: VirtualMachinesUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<VirtualMachinesUpdateResponse>,
      VirtualMachinesUpdateResponse
    >
  >;
  /**
   * The operation to update a virtual machine.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine.
   * @param parameters Parameters supplied to the Update Virtual Machine operation.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    vmName: string,
    parameters: VirtualMachineUpdate,
    options?: VirtualMachinesUpdateOptionalParams,
  ): Promise<VirtualMachinesUpdateResponse>;
  /**
   * The operation to delete a virtual machine.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    vmName: string,
    options?: VirtualMachinesDeleteOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * The operation to delete a virtual machine.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    vmName: string,
    options?: VirtualMachinesDeleteOptionalParams,
  ): Promise<void>;
  /**
   * Retrieves information about the model view or the instance view of a virtual machine.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    vmName: string,
    options?: VirtualMachinesGetOptionalParams,
  ): Promise<VirtualMachinesGetResponse>;
  /**
   * Retrieves information about the run-time state of a virtual machine.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine.
   * @param options The options parameters.
   */
  instanceView(
    resourceGroupName: string,
    vmName: string,
    options?: VirtualMachinesInstanceViewOptionalParams,
  ): Promise<VirtualMachinesInstanceViewResponse>;
  /**
   * Converts virtual machine disks from blob-based to managed disks. Virtual machine must be
   * stop-deallocated before invoking this operation.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine.
   * @param options The options parameters.
   */
  beginConvertToManagedDisks(
    resourceGroupName: string,
    vmName: string,
    options?: VirtualMachinesConvertToManagedDisksOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Converts virtual machine disks from blob-based to managed disks. Virtual machine must be
   * stop-deallocated before invoking this operation.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine.
   * @param options The options parameters.
   */
  beginConvertToManagedDisksAndWait(
    resourceGroupName: string,
    vmName: string,
    options?: VirtualMachinesConvertToManagedDisksOptionalParams,
  ): Promise<void>;
  /**
   * Shuts down the virtual machine and releases the compute resources. You are not billed for the
   * compute resources that this virtual machine uses.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine.
   * @param options The options parameters.
   */
  beginDeallocate(
    resourceGroupName: string,
    vmName: string,
    options?: VirtualMachinesDeallocateOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Shuts down the virtual machine and releases the compute resources. You are not billed for the
   * compute resources that this virtual machine uses.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine.
   * @param options The options parameters.
   */
  beginDeallocateAndWait(
    resourceGroupName: string,
    vmName: string,
    options?: VirtualMachinesDeallocateOptionalParams,
  ): Promise<void>;
  /**
   * Sets the OS state of the virtual machine to generalized. It is recommended to sysprep the virtual
   * machine before performing this operation. <br>For Windows, please refer to [Create a managed image
   * of a generalized VM in
   * Azure](https://docs.microsoft.com/azure/virtual-machines/windows/capture-image-resource).<br>For
   * Linux, please refer to [How to create an image of a virtual machine or
   * VHD](https://docs.microsoft.com/azure/virtual-machines/linux/capture-image).
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine.
   * @param options The options parameters.
   */
  generalize(
    resourceGroupName: string,
    vmName: string,
    options?: VirtualMachinesGeneralizeOptionalParams,
  ): Promise<void>;
  /**
   * The operation to power off (stop) a virtual machine. The virtual machine can be restarted with the
   * same provisioned resources. You are still charged for this virtual machine.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine.
   * @param options The options parameters.
   */
  beginPowerOff(
    resourceGroupName: string,
    vmName: string,
    options?: VirtualMachinesPowerOffOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * The operation to power off (stop) a virtual machine. The virtual machine can be restarted with the
   * same provisioned resources. You are still charged for this virtual machine.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine.
   * @param options The options parameters.
   */
  beginPowerOffAndWait(
    resourceGroupName: string,
    vmName: string,
    options?: VirtualMachinesPowerOffOptionalParams,
  ): Promise<void>;
  /**
   * The operation to reapply a virtual machine's state.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine.
   * @param options The options parameters.
   */
  beginReapply(
    resourceGroupName: string,
    vmName: string,
    options?: VirtualMachinesReapplyOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * The operation to reapply a virtual machine's state.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine.
   * @param options The options parameters.
   */
  beginReapplyAndWait(
    resourceGroupName: string,
    vmName: string,
    options?: VirtualMachinesReapplyOptionalParams,
  ): Promise<void>;
  /**
   * The operation to restart a virtual machine.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine.
   * @param options The options parameters.
   */
  beginRestart(
    resourceGroupName: string,
    vmName: string,
    options?: VirtualMachinesRestartOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * The operation to restart a virtual machine.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine.
   * @param options The options parameters.
   */
  beginRestartAndWait(
    resourceGroupName: string,
    vmName: string,
    options?: VirtualMachinesRestartOptionalParams,
  ): Promise<void>;
  /**
   * The operation to start a virtual machine.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine.
   * @param options The options parameters.
   */
  beginStart(
    resourceGroupName: string,
    vmName: string,
    options?: VirtualMachinesStartOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * The operation to start a virtual machine.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine.
   * @param options The options parameters.
   */
  beginStartAndWait(
    resourceGroupName: string,
    vmName: string,
    options?: VirtualMachinesStartOptionalParams,
  ): Promise<void>;
  /**
   * Shuts down the virtual machine, moves it to a new node, and powers it back on.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine.
   * @param options The options parameters.
   */
  beginRedeploy(
    resourceGroupName: string,
    vmName: string,
    options?: VirtualMachinesRedeployOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Shuts down the virtual machine, moves it to a new node, and powers it back on.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine.
   * @param options The options parameters.
   */
  beginRedeployAndWait(
    resourceGroupName: string,
    vmName: string,
    options?: VirtualMachinesRedeployOptionalParams,
  ): Promise<void>;
  /**
   * Reimages the virtual machine which has an ephemeral OS disk back to its initial state.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine.
   * @param options The options parameters.
   */
  beginReimage(
    resourceGroupName: string,
    vmName: string,
    options?: VirtualMachinesReimageOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Reimages the virtual machine which has an ephemeral OS disk back to its initial state.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine.
   * @param options The options parameters.
   */
  beginReimageAndWait(
    resourceGroupName: string,
    vmName: string,
    options?: VirtualMachinesReimageOptionalParams,
  ): Promise<void>;
  /**
   * The operation to retrieve SAS URIs for a virtual machine's boot diagnostic logs.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine.
   * @param options The options parameters.
   */
  retrieveBootDiagnosticsData(
    resourceGroupName: string,
    vmName: string,
    options?: VirtualMachinesRetrieveBootDiagnosticsDataOptionalParams,
  ): Promise<VirtualMachinesRetrieveBootDiagnosticsDataResponse>;
  /**
   * The operation to perform maintenance on a virtual machine.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine.
   * @param options The options parameters.
   */
  beginPerformMaintenance(
    resourceGroupName: string,
    vmName: string,
    options?: VirtualMachinesPerformMaintenanceOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * The operation to perform maintenance on a virtual machine.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine.
   * @param options The options parameters.
   */
  beginPerformMaintenanceAndWait(
    resourceGroupName: string,
    vmName: string,
    options?: VirtualMachinesPerformMaintenanceOptionalParams,
  ): Promise<void>;
  /**
   * The operation to simulate the eviction of spot virtual machine.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine.
   * @param options The options parameters.
   */
  simulateEviction(
    resourceGroupName: string,
    vmName: string,
    options?: VirtualMachinesSimulateEvictionOptionalParams,
  ): Promise<void>;
  /**
   * Assess patches on the VM.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine.
   * @param options The options parameters.
   */
  beginAssessPatches(
    resourceGroupName: string,
    vmName: string,
    options?: VirtualMachinesAssessPatchesOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<VirtualMachinesAssessPatchesResponse>,
      VirtualMachinesAssessPatchesResponse
    >
  >;
  /**
   * Assess patches on the VM.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine.
   * @param options The options parameters.
   */
  beginAssessPatchesAndWait(
    resourceGroupName: string,
    vmName: string,
    options?: VirtualMachinesAssessPatchesOptionalParams,
  ): Promise<VirtualMachinesAssessPatchesResponse>;
  /**
   * Installs patches on the VM.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine.
   * @param installPatchesInput Input for InstallPatches as directly received by the API
   * @param options The options parameters.
   */
  beginInstallPatches(
    resourceGroupName: string,
    vmName: string,
    installPatchesInput: VirtualMachineInstallPatchesParameters,
    options?: VirtualMachinesInstallPatchesOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<VirtualMachinesInstallPatchesResponse>,
      VirtualMachinesInstallPatchesResponse
    >
  >;
  /**
   * Installs patches on the VM.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine.
   * @param installPatchesInput Input for InstallPatches as directly received by the API
   * @param options The options parameters.
   */
  beginInstallPatchesAndWait(
    resourceGroupName: string,
    vmName: string,
    installPatchesInput: VirtualMachineInstallPatchesParameters,
    options?: VirtualMachinesInstallPatchesOptionalParams,
  ): Promise<VirtualMachinesInstallPatchesResponse>;
  /**
   * Run command on the VM.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine.
   * @param parameters Parameters supplied to the Run command operation.
   * @param options The options parameters.
   */
  beginRunCommand(
    resourceGroupName: string,
    vmName: string,
    parameters: RunCommandInput,
    options?: VirtualMachinesRunCommandOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<VirtualMachinesRunCommandResponse>,
      VirtualMachinesRunCommandResponse
    >
  >;
  /**
   * Run command on the VM.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine.
   * @param parameters Parameters supplied to the Run command operation.
   * @param options The options parameters.
   */
  beginRunCommandAndWait(
    resourceGroupName: string,
    vmName: string,
    parameters: RunCommandInput,
    options?: VirtualMachinesRunCommandOptionalParams,
  ): Promise<VirtualMachinesRunCommandResponse>;
}
