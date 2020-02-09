import { TodoGateway, Todo } from '@/domain/todo';
import { RestAgent } from '@/infrastructures/restAgent';

export class TodoApi implements TodoGateway {
  constructor(readonly agent: any) {}

  async todos(): Promise<Todo[]> {
    const res = await this.agent.get('/api/todos');

    const json = await res.json();
    if (!res.ok) {
      throw new Error(json);
    }

    return json;
  }
}
