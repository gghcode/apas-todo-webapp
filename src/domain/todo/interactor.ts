import { Result } from '../dto';

export interface TodoInteractor {
  fetchTodoCategories(): Promise<Result<TodoCategory[], Error>>;
  fetchTodos(): Promise<Result<Todo[], Error>>;
}

export interface TodoGateway {
  todos(): Promise<Todo[]>;
}

export interface Todo {}

export interface TodoCategory {
  readonly name: string;
}
