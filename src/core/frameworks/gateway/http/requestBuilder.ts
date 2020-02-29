import { Request, AllowMethods } from './request';
import { RequestDecorateFunc } from './decorators';

export class RequestBuilder {
  pipelines: RequestDecorateFunc[] = [];

  with(func: RequestDecorateFunc): RequestBuilder {
    this.pipelines.push(func);
    return this;
  }

  build(path: string, method: AllowMethods): Request {
    const req: Request = {
      path,
      method,
      headers: {},
    };

    for (const decorate of this.pipelines) {
      decorate(req);
    }

    return req;
  }
}
