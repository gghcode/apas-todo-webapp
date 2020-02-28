import { RequestBuilder } from '.';
import { RequestDecorateFunc } from './decorators';

export interface Agent {
  setAccessToken(token: string): void;
  decorateAccessToken(): RequestDecorateFunc;

  run(builder: RequestBuilder): Promise<any>;
}
