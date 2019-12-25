import { TaskResult } from '../dto';

export interface TodoInteractor {
  fetchTodoCategories(): Promise<TodoCategory[]>;
  fetchTodos(): Promise<Todo[]>;
}

export interface TodoGateway {
  todos(): Promise<TaskResult<Todo[]>>;
}

export interface Todo {}
export interface TodoCategory {
  readonly name: string;
}
