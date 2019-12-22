import { TaskResult } from '../dto';

export interface TodoInteractor {
  todos(): Promise<TodoResult>;
}

export interface TodoGateway {
  todos(accessToken: string): Promise<TaskResult<Todo[]>>;
}

export interface Todo {}
export interface TodoResult {}
