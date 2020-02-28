import { Request } from './request';
import { Context } from '@/core/entities';

export interface Agent {
  context(): Context;
  useContext(ctx: Context): void;

  run(req: Request): Promise<any>;
}
