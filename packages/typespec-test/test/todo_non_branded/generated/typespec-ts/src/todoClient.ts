// Licensed under the MIT License.

import {
  createTodo,
  TodoContext,
  TodoClientOptionalParams,
} from "./api/index.js";
import {
  TodoItemsOperations,
  _getTodoItemsOperations,
} from "./classic/todoItems/index.js";
import { UsersOperations, _getUsersOperations } from "./classic/users/index.js";
import { Pipeline, KeyCredential } from "@typespec/ts-http-runtime";

export { TodoClientOptionalParams } from "./api/todoContext.js";

export class TodoClient {
  private _client: TodoContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    endpointParam: string,
    credential: KeyCredential,
    options: TodoClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createTodo(endpointParam, credential, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this.todoItems = _getTodoItemsOperations(this._client);
    this.users = _getUsersOperations(this._client);
  }

  /** The operation groups for todoItems */
  public readonly todoItems: TodoItemsOperations;
  /** The operation groups for users */
  public readonly users: UsersOperations;
}
