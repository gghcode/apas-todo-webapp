import { TodoGateway, TodoCategory, Todo } from '.';

export class TodoUsecase {
  constructor(private readonly todoGateway: TodoGateway) {}

  async getTodoCategories(): Promise<TodoCategory[]> {
    return [
      {
        name: 'All',
      },
      {
        name: 'Today',
      },
      {
        name: 'Search',
      },
    ];
  }

  async getTodos(): Promise<Todo[]> {
    const todos = await this.todoGateway.todos();
    return todos;
  }
}
