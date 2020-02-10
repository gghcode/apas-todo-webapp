import { TodoGateway, Todo } from '@/domain/todo';
import { Agent, RequestBuilder, setToken } from '@/infrastructures/http';

export class TodoApi implements TodoGateway {
  constructor(readonly agent: Agent) {}

  async todos(): Promise<Todo[]> {
    const req = new RequestBuilder()
      .withAppContext(setToken())
      .build('/api/todos', 'GET');

    const res = await this.agent.run(req);
    const json = await res.json();
    if (!res.ok) {
      throw new Error(json);
    }

    return json;
  }
}
