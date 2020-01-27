import { TodoGateway, Todo } from '@/domain/todo';
import { ApiAgent } from '@/infrastructures/agent';

export class TodoApi implements TodoGateway {
  constructor(readonly agent: ApiAgent) {}

  async todos(): Promise<Todo[]> {
    const res = await this.agent.get('/api/todos');

    const json = await res.json();
    if (!res.ok) {
      throw new Error(json);
    }

    return json;
  }
}
