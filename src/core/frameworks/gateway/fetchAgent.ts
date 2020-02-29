import { Agent, Request, Response } from './http';

const baseUrl = 'https://apas-todo-api.azurewebsites.net';

export class FetchAgent implements Agent {
  async run(req: Request): Promise<Response> {
    const res = await fetch(baseUrl + req.path, {
      method: req.method,
      headers: req.headers,
      body: JSON.stringify(req.body),
    });

    const json = await res.json();
    return {
      status: res.status,
      json,
    };
  }
}
