// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { RawHttpHeaders } from "@azure/core-rest-pipeline";
import type { HttpResponse } from "@azure-rest/core-client";
import type {
  DetectionResultOutput,
  ErrorResponseOutput,
  ModelOutput,
  ModelListOutput,
  LastDetectionResultOutput,
} from "./outputModels.js";

/** For asynchronous inference, get multivariate anomaly detection result based on resultId returned by the BatchDetectAnomaly api. */
export interface GetMultivariateBatchDetectionResult200Response
  extends HttpResponse {
  status: "200";
  body: DetectionResultOutput;
}

export interface GetMultivariateBatchDetectionResultDefaultHeaders {
  /** Error code */
  "x-ms-error-code"?: string;
}

/** For asynchronous inference, get multivariate anomaly detection result based on resultId returned by the BatchDetectAnomaly api. */
export interface GetMultivariateBatchDetectionResultDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
  headers: RawHttpHeaders & GetMultivariateBatchDetectionResultDefaultHeaders;
}

export interface CreateAndTrainMultivariateModel201Headers {
  /** Location and ID of the model. */
  location?: string;
}

/** Create and train a multivariate anomaly detection model. The request must include a source parameter to indicate an externally accessible Azure blob storage URI.There are two types of data input: An URI pointed to an Azure blob storage folder which contains multiple CSV files, and each CSV file contains two columns, timestamp and variable. Another type of input is an URI pointed to a CSV file in Azure blob storage, which contains all the variables and a timestamp column. */
export interface CreateAndTrainMultivariateModel201Response
  extends HttpResponse {
  status: "201";
  body: ModelOutput;
  headers: RawHttpHeaders & CreateAndTrainMultivariateModel201Headers;
}

export interface CreateAndTrainMultivariateModelDefaultHeaders {
  /** Error code */
  "x-ms-error-code"?: string;
}

/** Create and train a multivariate anomaly detection model. The request must include a source parameter to indicate an externally accessible Azure blob storage URI.There are two types of data input: An URI pointed to an Azure blob storage folder which contains multiple CSV files, and each CSV file contains two columns, timestamp and variable. Another type of input is an URI pointed to a CSV file in Azure blob storage, which contains all the variables and a timestamp column. */
export interface CreateAndTrainMultivariateModelDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
  headers: RawHttpHeaders & CreateAndTrainMultivariateModelDefaultHeaders;
}

/** List models of a resource. */
export interface ListMultivariateModels200Response extends HttpResponse {
  status: "200";
  body: ModelListOutput;
}

export interface ListMultivariateModelsDefaultHeaders {
  /** Error code */
  "x-ms-error-code"?: string;
}

/** List models of a resource. */
export interface ListMultivariateModelsDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
  headers: RawHttpHeaders & ListMultivariateModelsDefaultHeaders;
}

/** Delete an existing multivariate model according to the modelId */
export interface DeleteMultivariateModel204Response extends HttpResponse {
  status: "204";
}

export interface DeleteMultivariateModelDefaultHeaders {
  /** Error code */
  "x-ms-error-code"?: string;
}

/** Delete an existing multivariate model according to the modelId */
export interface DeleteMultivariateModelDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
  headers: RawHttpHeaders & DeleteMultivariateModelDefaultHeaders;
}

/** Get detailed information of multivariate model, including the training status and variables used in the model. */
export interface GetMultivariateModel200Response extends HttpResponse {
  status: "200";
  body: ModelOutput;
}

export interface GetMultivariateModelDefaultHeaders {
  /** Error code */
  "x-ms-error-code"?: string;
}

/** Get detailed information of multivariate model, including the training status and variables used in the model. */
export interface GetMultivariateModelDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
  headers: RawHttpHeaders & GetMultivariateModelDefaultHeaders;
}

export interface DetectMultivariateBatchAnomaly202Headers {
  /** Location of the detection result. */
  "operation-location"?: string;
  /** Id of the detection result. */
  "operation-id"?: string;
}

/** Submit multivariate anomaly detection task with the modelId of trained model and inference data, the input schema should be the same with the training request. The request will complete asynchronously and return a resultId to query the detection result.The request should be a source link to indicate an externally accessible Azure storage Uri, either pointed to an Azure blob storage folder, or pointed to a CSV file in Azure blob storage. */
export interface DetectMultivariateBatchAnomaly202Response
  extends HttpResponse {
  status: "202";
  body: DetectionResultOutput;
  headers: RawHttpHeaders & DetectMultivariateBatchAnomaly202Headers;
}

export interface DetectMultivariateBatchAnomalyDefaultHeaders {
  /** Error code */
  "x-ms-error-code"?: string;
}

/** Submit multivariate anomaly detection task with the modelId of trained model and inference data, the input schema should be the same with the training request. The request will complete asynchronously and return a resultId to query the detection result.The request should be a source link to indicate an externally accessible Azure storage Uri, either pointed to an Azure blob storage folder, or pointed to a CSV file in Azure blob storage. */
export interface DetectMultivariateBatchAnomalyDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
  headers: RawHttpHeaders & DetectMultivariateBatchAnomalyDefaultHeaders;
}

/** Submit multivariate anomaly detection task with the modelId of trained model and inference data, and the inference data should be put into request body in a JSON format. The request will complete synchronously and return the detection immediately in the response body. */
export interface DetectMultivariateLastAnomaly200Response extends HttpResponse {
  status: "200";
  body: LastDetectionResultOutput;
}

export interface DetectMultivariateLastAnomalyDefaultHeaders {
  /** Error code */
  "x-ms-error-code"?: string;
}

/** Submit multivariate anomaly detection task with the modelId of trained model and inference data, and the inference data should be put into request body in a JSON format. The request will complete synchronously and return the detection immediately in the response body. */
export interface DetectMultivariateLastAnomalyDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
  headers: RawHttpHeaders & DetectMultivariateLastAnomalyDefaultHeaders;
}
