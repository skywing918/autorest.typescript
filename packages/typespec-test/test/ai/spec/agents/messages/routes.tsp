import "@azure-tools/typespec-azure-core";
import "@typespec/rest";
import "@typespec/http";
import "@typespec/versioning";

import "../common/models.tsp";
import "./models.tsp";

using TypeSpec.Rest;
using TypeSpec.Http;
using TypeSpec.Versioning;

using Azure.Core;

namespace Azure.AI.Projects.Agents;

/**
 * Creates a new message on a specified thread.
 *
 * @param threadId The ID of the thread to create the new message on.
 * @returns A representation of the new message.
 */
#suppress "@azure-tools/typespec-azure-core/use-standard-names" "mirrored API responds with a container"
#suppress "@azure-tools/typespec-azure-core/use-standard-operations" "not yet an Azure operation"
#suppress "@azure-tools/typespec-azure-core/no-operation-id" "non-standard operations"
#suppress "@azure-tools/typespec-azure-core/operation-missing-api-version" "not yet versioned"
@post
@route("/threads/{threadId}/messages")
op createMessage is Azure.Core.Foundations.Operation<
  {
    @doc("Identifier of the thread.")
    @path
    threadId: string;

    /** A single message within an agent thread, as provided during that thread's creation for its initial state. */
    ...ThreadMessageOptions;
  },
  ThreadMessage
>;

/**
 * Gets a list of messages that exist on a thread.
 *
 * @param threadId The ID of the thread to list messages from.
 * @returns The requested list of messages.
 */
#suppress "@azure-tools/typespec-azure-core/use-standard-names" "mirrored API responds with a container"
#suppress "@azure-tools/typespec-azure-core/use-standard-operations" "not yet an Azure operation"
#suppress "@azure-tools/typespec-azure-core/no-operation-id" "non-standard operations"
#suppress "@azure-tools/typespec-azure-core/operation-missing-api-version" "not yet versioned"
@get
@route("/threads/{threadId}/messages")
op listMessages is Azure.Core.Foundations.Operation<
  {
    @doc("Identifier of the thread.")
    @path
    threadId: string;

    /** Filter messages by the run ID that generated them. */
    @query
    runId?: string;

    ...OpenAIListRequestOptions;
  },
  OpenAIPageableListOf<ThreadMessage>
>;

/**
 * Gets an existing message from an existing thread.
 *
 * @param threadId The ID of the thread to retrieve the specified message from.
 * @param messageId The ID of the message to retrieve from the specified thread.
 * @returns A representation of the requested message.
 */
#suppress "@azure-tools/typespec-azure-core/use-standard-operations" "not yet an Azure operation"
#suppress "@azure-tools/typespec-azure-core/no-operation-id" "non-standard operations"
#suppress "@azure-tools/typespec-azure-core/operation-missing-api-version" "not yet versioned"
#suppress "@azure-tools/typespec-azure-core/use-standard-names" "mirrored API name parity"
@get
@route("/threads/{threadId}/messages/{messageId}")
op getMessage is Azure.Core.Foundations.Operation<
  {
    @doc("Identifier of the thread.")
    @path
    threadId: string;

    @doc("Identifier of the message.")
    @path
    messageId: string;
  },
  ThreadMessage
>;

/**
 * Modifies an existing message on an existing thread.
 *
 * @param threadId The ID of the thread containing the specified message to modify.
 * @param messageId The ID of the message to modify on the specified thread.
 * @returns A representation of the modified message.
 */
#suppress "@azure-tools/typespec-azure-core/use-standard-operations" "not yet an Azure operation"
#suppress "@azure-tools/typespec-azure-core/no-operation-id" "non-standard operations"
#suppress "@azure-tools/typespec-azure-core/operation-missing-api-version" "not yet versioned"
@post
@route("/threads/{threadId}/messages/{messageId}")
op updateMessage is Azure.Core.Foundations.Operation<
  {
    @doc("Identifier of the thread.")
    @path
    threadId: string;

    @doc("Identifier of the message.")
    @path
    messageId: string;

    ...OptionalNullableMetadata;
  },
  ThreadMessage
>;
