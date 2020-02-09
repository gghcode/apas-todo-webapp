import { Request } from './request';

export interface Agent {
  run(req: Request): Promise<any>;
}
