/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { VirtualMachineImages } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { ComputeManagementClient } from "../computeManagementClient.js";
import {
  VirtualMachineImagesGetOptionalParams,
  VirtualMachineImagesGetResponse,
  VirtualMachineImagesListOptionalParams,
  VirtualMachineImagesListResponse,
  VirtualMachineImagesListOffersOptionalParams,
  VirtualMachineImagesListOffersResponse,
  VirtualMachineImagesListPublishersOptionalParams,
  VirtualMachineImagesListPublishersResponse,
  VirtualMachineImagesListSkusOptionalParams,
  VirtualMachineImagesListSkusResponse,
} from "../models/index.js";

/** Class containing VirtualMachineImages operations. */
export class VirtualMachineImagesImpl implements VirtualMachineImages {
  private readonly client: ComputeManagementClient;

  /**
   * Initialize a new instance of the class VirtualMachineImages class.
   * @param client Reference to the service client
   */
  constructor(client: ComputeManagementClient) {
    this.client = client;
  }

  /**
   * Gets a virtual machine image.
   * @param location The name of a supported Azure region.
   * @param publisherName A valid image publisher.
   * @param offer A valid image publisher offer.
   * @param skus A valid image SKU.
   * @param version A valid image SKU version.
   * @param options The options parameters.
   */
  get(
    location: string,
    publisherName: string,
    offer: string,
    skus: string,
    version: string,
    options?: VirtualMachineImagesGetOptionalParams,
  ): Promise<VirtualMachineImagesGetResponse> {
    return this.client.sendOperationRequest(
      { location, publisherName, offer, skus, version, options },
      getOperationSpec,
    );
  }

  /**
   * Gets a list of all virtual machine image versions for the specified location, publisher, offer, and
   * SKU.
   * @param location The name of a supported Azure region.
   * @param publisherName A valid image publisher.
   * @param offer A valid image publisher offer.
   * @param skus A valid image SKU.
   * @param options The options parameters.
   */
  list(
    location: string,
    publisherName: string,
    offer: string,
    skus: string,
    options?: VirtualMachineImagesListOptionalParams,
  ): Promise<VirtualMachineImagesListResponse> {
    return this.client.sendOperationRequest(
      { location, publisherName, offer, skus, options },
      listOperationSpec,
    );
  }

  /**
   * Gets a list of virtual machine image offers for the specified location and publisher.
   * @param location The name of a supported Azure region.
   * @param publisherName A valid image publisher.
   * @param options The options parameters.
   */
  listOffers(
    location: string,
    publisherName: string,
    options?: VirtualMachineImagesListOffersOptionalParams,
  ): Promise<VirtualMachineImagesListOffersResponse> {
    return this.client.sendOperationRequest(
      { location, publisherName, options },
      listOffersOperationSpec,
    );
  }

  /**
   * Gets a list of virtual machine image publishers for the specified Azure location.
   * @param location The name of a supported Azure region.
   * @param options The options parameters.
   */
  listPublishers(
    location: string,
    options?: VirtualMachineImagesListPublishersOptionalParams,
  ): Promise<VirtualMachineImagesListPublishersResponse> {
    return this.client.sendOperationRequest(
      { location, options },
      listPublishersOperationSpec,
    );
  }

  /**
   * Gets a list of virtual machine image SKUs for the specified location, publisher, and offer.
   * @param location The name of a supported Azure region.
   * @param publisherName A valid image publisher.
   * @param offer A valid image publisher offer.
   * @param options The options parameters.
   */
  listSkus(
    location: string,
    publisherName: string,
    offer: string,
    options?: VirtualMachineImagesListSkusOptionalParams,
  ): Promise<VirtualMachineImagesListSkusResponse> {
    return this.client.sendOperationRequest(
      { location, publisherName, offer, options },
      listSkusOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.Compute/locations/{location}/publishers/{publisherName}/artifacttypes/vmimage/offers/{offer}/skus/{skus}/versions/{version}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.VirtualMachineImage,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.location,
    Parameters.publisherName,
    Parameters.version,
    Parameters.offer,
    Parameters.skus,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.Compute/locations/{location}/publishers/{publisherName}/artifacttypes/vmimage/offers/{offer}/skus/{skus}/versions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: {
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "VirtualMachineImageResource",
            },
          },
        },
      },
    },
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.expand,
    Parameters.top,
    Parameters.orderby,
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.location,
    Parameters.publisherName,
    Parameters.offer,
    Parameters.skus,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listOffersOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.Compute/locations/{location}/publishers/{publisherName}/artifacttypes/vmimage/offers",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: {
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "VirtualMachineImageResource",
            },
          },
        },
      },
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.location,
    Parameters.publisherName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listPublishersOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.Compute/locations/{location}/publishers",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: {
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "VirtualMachineImageResource",
            },
          },
        },
      },
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.location,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listSkusOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.Compute/locations/{location}/publishers/{publisherName}/artifacttypes/vmimage/offers/{offer}/skus",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: {
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "VirtualMachineImageResource",
            },
          },
        },
      },
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.location,
    Parameters.publisherName,
    Parameters.offer,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
