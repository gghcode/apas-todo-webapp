import { Request } from './request';
import { Response } from './response';

export interface Agent {
  run(req: Request): Promise<Response>;
}
