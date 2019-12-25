import { ApiAgent, Request } from './agent';

const baseUrl = 'https://apas-todo-api.azurewebsites.net';

export class NativeAgent implements ApiAgent {
  post(url: string, req: Request): Promise<any> {
    return fetch(baseUrl + url, {
      method: req.method,
      body: JSON.stringify(req.body),
    });
  }

  async get(url: string): Promise<any> {}

  async put(url: string): Promise<any> {}

  async delete(url: string): Promise<any> {}
}
