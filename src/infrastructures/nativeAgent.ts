import { ApiAgent, Request } from './agent';
import { TokenContainer } from '@/domain/auth/usecase';

const baseUrl = 'https://apas-todo-api.azurewebsites.net';

export class NativeAgent implements ApiAgent {
  constructor(readonly tokenContainer: TokenContainer) {}

  post(url: string, req: Request): Promise<any> {
    return fetch(baseUrl + url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${this.tokenContainer.get()}`,
      },
      body: JSON.stringify(req.body),
    });
  }

  async get(url: string): Promise<any> {
    return fetch(baseUrl + url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${this.tokenContainer.get()}`,
      },
    });
  }

  async put(url: string): Promise<any> {}

  async delete(url: string): Promise<any> {}
}
