// import { RestAgent, Request } from './restAgent';
import { AppContext } from '@/domain/common/appContext';
import { Agent, Request } from '@/infrastructures/http';

const baseUrl = 'https://apas-todo-api.azurewebsites.net';

export class FetchAgent implements Agent {
  private ctx = new AppContext();

  appContext(): AppContext {
    return this.ctx;
  }

  useAppContext(ctx: AppContext) {
    this.ctx = ctx;
  }

  run(req: Request): Promise<any> {
    for (const pipe of req.lazyPipes) {
      pipe(req, this.ctx);
    }

    return fetch(baseUrl + req.path, {
      method: req.method,
      headers: req.headers,
      body: JSON.stringify(req.body),
    });
  }
}

// export class NativeAgent implements RestAgent {
//   private readonly ctx = new AppContext();

//   injectAccessToken(accessToken: string) {
//     this.ctx.set('access_token', accessToken);
//   }

//   post(url: string, req: Request): Promise<any> {
//     return fetch(baseUrl + url, {
//       method: 'POST',
//       headers: {
//         // Authorization: `Bearer ${this.tokenContainer.get()}`,
//       },
//       body: JSON.stringify(req.body),
//     });
//   }

//   async get(url: string): Promise<any> {
//     return fetch(baseUrl + url, {
//       method: 'GET',
//       headers: {
//         // Authorization: `Bearer ${this.tokenContainer.get()}`,
//       },
//     });
//   }

//   async put(url: string): Promise<any> {}

//   async delete(url: string): Promise<any> {}
// }
