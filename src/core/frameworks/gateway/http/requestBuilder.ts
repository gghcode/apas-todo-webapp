import { Request, AllowMethods } from './request';
import { RequestDecorateFunc } from './decorators';

export class RequestBuilder {
  pipelines: RequestDecorateFunc[] = [];

  constructor(
    private readonly path: string,
    private readonly method: AllowMethods
  ) {}

  with(func: RequestDecorateFunc): RequestBuilder {
    this.pipelines.push(func);
    return this;
  }

  build(): Request {
    const req: Request = {
      path: this.path,
      method: this.method,
      headers: {},
    };

    for (const decorate of this.pipelines) {
      decorate(req);
    }

    return req;
  }
}
