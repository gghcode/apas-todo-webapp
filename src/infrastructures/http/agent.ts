import { Request } from './request';
import { AppContext } from '@/domain/common/appContext';

export interface Agent {
  appContext(): AppContext;
  useAppContext(ctx: AppContext): void;

  run(req: Request): Promise<any>;
}
