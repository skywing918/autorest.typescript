import "@typespec/rest";
import "@typespec/versioning";
import "@typespec/openapi";
import "@azure-tools/typespec-azure-core";
import "@azure-tools/typespec-autorest";

using TypeSpec.Http;
using TypeSpec.Rest;
using TypeSpec.Versioning;
using Azure.Core;
using OpenAPI;

//
// ** Service description **
//

@service(#{
  title: "Confidential Ledger Service",
})
@useAuth(OAuth2Auth<[MyFlow]>)
@server(
  "{ledgerUri}",
  "Confidential Ledger Service",
  {
    ledgerUri: url,
  }
)
@versioned(Azure.Security.ConfidentialLedger.Versions)
namespace Azure.Security.ConfidentialLedger;

enum Versions {
  /** Version 2022-08-31 */
  @useDependency(Azure.Core.Versions.v1_0_Preview_1)
  `2022-05-13`,
}

@doc("Define the auth flow")
model MyFlow {
  @doc("type of auth flow")
  type: OAuth2FlowType.implicit;
  @doc("authorizationUrl of auth flow")
  authorizationUrl: "https://login.microsoftonline.com/common/v2.0/oauth2/authorize";
  @doc("tokenUrl of auth flow")
  tokenUrl: "https://login.microsoftonline.com/common/v2.0/oauth2/token";
  @doc("scopes of auth flow")
  scopes: ["https://confidential-ledger.azure.com/.default"];
}
//
// ** Parameter descriptions **
//

@doc("A unique identifier for the state of the ledger. If returned as part of a LedgerEntry, it indicates the state from which the entry was read.")
scalar TransactionId extends string;

@doc("The collectionId parameter definition.")
model CollectionIdParameter {
  @query
  @doc("The collection id.")
  collectionId?: string;
}

//
// ** Model descriptions **
//

@resource("collections")
@doc("Identifier for collections.")
model Collection {
  @key
  @doc("The collection id.")
  @visibility(Lifecycle.Read)
  collectionId: string;
}

@doc("Details about a ledger entry.")
@resource("transactions")
model LedgerEntry {
  @doc("Contents of the ledger entry.")
  contents: string;

  @visibility(Lifecycle.Read)
  @doc("The collection id.")
  collectionId: string;

  @key
  @visibility(Lifecycle.Read)
  @doc("A unique identifier for the state of the ledger. If returned as part of a LedgerEntry, it indicates the state from which the entry was read.")
  transactionId: TransactionId;
}

// TODO: No way to set "x-ms-enum.name" right now
@doc("Represents an assignable role.")
@fixed
enum LedgerUserRole {
  Administrator,
  Contributor,
  Reader,
}

@resource("users")
@doc("Details about a Confidential ledger user.")
model LedgerUser {
  @key
  @doc("The user id, either an AAD object ID or certificate fingerprint.")
  @extension("x-ms-skip-url-encoding", true)
  @visibility(Lifecycle.Read)
  userId: string;

  @doc("The user's assigned role.")
  assignedRole: LedgerUserRole;
}

@doc("The contents of a receipt.")
model ReceiptContents {
  // Elided for now
}

// TODO: No way to set "x-ms-enum.name" right now
@doc("State of a ledger query.")
@fixed
enum LedgerQueryState {
  Loading,
  Ready,
}

@doc("A receipt certifying the transaction at the specified id.")
model TransactionReceipt {
  @doc("The receipt contents.")
  receipt: ReceiptContents;

  @doc("The state of the ledger query.")
  state: LedgerQueryState;

  @doc("The transaction ID.")
  transactionId: TransactionId;
}

// TODO: No way to set "x-ms-enum.name" right now
@doc("Represents the state of the transaction.")
@fixed
enum TransactionState {
  Committed,
  Pending,
}

@doc("Response returned to a query for the transaction status.")
model TransactionStatus {
  @doc("The transaction state.")
  state: TransactionState;

  @doc("The transaction ID.")
  transactionId: TransactionId;
}

@doc("Paginated ledger entries returned in response to a query.")
@pagedResult
model PagedLedgerEntries {
  @doc("Array of ledger entries.")
  @items
  entries: LedgerEntry[];

  @doc("State of the ledger query.")
  state: LedgerQueryState;

  @doc("Path from which to retrieve the next page of results.")
  @TypeSpec.nextLink
  nextLink?: ResourceLocation<LedgerEntry>;
}

//
// ** Operations **
//

@route("/app")
namespace ConfidentialLedger {
  #suppress "@azure-tools/typespec-azure-core/use-standard-operations" "This is an existing service, we have a non-conforming operation."
  @summary("Retrieves a list of collection ids present in the Confidential Ledger")
  @doc("Collection ids are user-created collections of ledger entries")
  op listCollections is Azure.Core.Foundations.NonPagedResourceList<Collection>;

  // TODO: add return model
  #suppress "@azure-tools/typespec-azure-core/use-standard-operations" "This is an existing service, we have a non-conforming operation."
  @route("/enclaveQuotes")
  @summary("Gets quotes for all nodes of the Confidential Ledger.")
  @doc("A quote is an SGX enclave measurement that can be used to verify the validity of a node and its enclave.")
  @get
  op getEnclaveQuotes is Azure.Core.Foundations.Operation<{}, OkResponse>;

  // TODO: add return model
  #suppress "@azure-tools/typespec-azure-core/use-standard-operations" "This is an existing service, we have a non-conforming operation."
  @route("/governance/constitution")
  @summary("Gets the constitution used for governance.")
  @doc("The constitution is a script that assesses and applies proposals from consortium members.")
  @get
  op getConstitution is Azure.Core.Foundations.Operation<{}, OkResponse>;

  // TODO: add return model
  #suppress "@azure-tools/typespec-azure-core/use-standard-operations" "This is an existing service, we have a non-conforming operation."
  @route("/governance/members")
  @summary("Gets the consortium members.")
  @doc("Consortium members can manage the Confidential Ledger.")
  @get
  op getConsortiumMembers is Azure.Core.Foundations.Operation<{}, OkResponse>;

  #suppress "@azure-tools/typespec-azure-core/use-standard-operations" "This is an existing service with a non-standard list operation."
  @summary("Gets ledger entries from a collection corresponding to a range.")
  @doc("A collection id may optionally be specified. Only entries in the specified (or default) collection will be returned.")
  op listLedgerEntries is Azure.Core.Foundations.ResourceList<LedgerEntry, {}, PagedLedgerEntries>;

  @route("transactions")
  @summary("Writes a ledger entry.")
  @doc("A collection id may optionally be specified.")
  @post
  op createLedgerEntry is Azure.Core.ResourceCreateWithServiceProvidedName<
    LedgerEntry,
    {
      parameters: CollectionIdParameter;
    }
  >;

  @doc("Get a LedgerEntry")
  @summary("Gets the ledger entry at the specified transaction id. A collection id may optionally be specified to indicate the collection from which to fetch the value.")
  op getLedgerEntry is Azure.Core.ResourceRead<
    LedgerEntry,
    {
      parameters: CollectionIdParameter;
    }
  >;

  @get
  @action("receipt")
  @doc("Runs a custom action on LedgerEntry")
  @summary("Gets a receipt certifying ledger contents at a particular transaction id.")
  @actionSeparator("/")
  op getReceipt is Azure.Core.ResourceAction<LedgerEntry, {}, TransactionReceipt>;

  @get
  @action("status")
  @doc("Runs a custom action on LedgerEntry")
  @summary("Gets a receipt certifying ledger contents at a particular transaction id.")
  @actionSeparator("/")
  op getTransactionStatus is Azure.Core.ResourceAction<LedgerEntry, {}, TransactionStatus>;

  // TODO: There isn't a way to customize the action name at the moment
  @get
  @doc("Runs a custom action on LedgerEntry")
  @summary("Gets the current value available in the ledger.")
  @actionSeparator("/")
  op getCurrentLedgerEntry is Azure.Core.ResourceCollectionAction<
    LedgerEntry,
    CollectionIdParameter,
    LedgerEntry
  >;

  @doc("Delete a LedgerUser")
  @summary("Deletes a user from the Confidential Ledger.")
  op deleteUser is Azure.Core.ResourceDelete<LedgerUser>;

  @doc("Get a LedgerUser")
  @summary("Gets a user.")
  op getUser is Azure.Core.ResourceRead<LedgerUser>;

  @doc("Creates or updates a LedgerUser")
  @summary("Adds a user or updates a user's fields.")
  op createOrUpdateUser is Azure.Core.ResourceCreateOrUpdate<LedgerUser>;
}
