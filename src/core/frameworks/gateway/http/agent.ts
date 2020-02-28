import { RequestBuilder } from '.';

export interface Agent {
  setAccessToken(token: string): void;
  run(builder: RequestBuilder): Promise<any>;
}
