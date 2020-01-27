import { TodoGateway, TodoCategory, Todo } from '.';

export class TodoUsecase {
  constructor(private readonly todoGateway: TodoGateway) {}

  async getTodoCategories(): Promise<TodoCategory[]> {
    return [];
  }

  async getTodos(): Promise<Todo[]> {
    return this.todoGateway.todos();
  }
}
