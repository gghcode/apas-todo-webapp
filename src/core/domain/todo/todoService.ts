import { TodoUsecase } from './todoUsecase';
import { TodoGateway } from './todoGateway';

export class TodoService implements TodoUsecase {
  constructor(private readonly todoGateway: TodoGateway) {}

  async getTodos(): Promise<TodoResponse[]> {
    const todos = await this.todoGateway.todos();
    return todos;
  }
}
