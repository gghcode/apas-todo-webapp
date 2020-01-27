import { TodoGateway, TodoCategory, Todo } from '.';

export class TodoUsecase {
  constructor(private readonly todoGateway: TodoGateway) {}

  async getTodoCategories(): Promise<TodoCategory[]> {
    return [
      {
        name: 'ab',
      },
      {
        name: 'bcd',
      },
    ];
  }

  async getTodos(): Promise<Todo[]> {
    const todos = await this.todoGateway.todos();
    return todos;
  }
}
