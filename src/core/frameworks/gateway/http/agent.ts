import { RequestBuilder } from '.';
import { RequestDecorateFunc } from './decorators';
import { Response } from './response';

export interface Agent {
  setAccessToken(token: string): void;
  decorateAccessToken(): RequestDecorateFunc;

  run(builder: RequestBuilder): Promise<Response>;
}
