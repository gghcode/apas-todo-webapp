import { AppContext } from '@/domain/common/appContext';

export type EffectWithAppContextFunc = (req: Request, ctx: AppContext) => void;

export interface Request {
  path: string;
  method: string;
  body?: any;
  headers: any;

  lazyPipes: EffectWithAppContextFunc[];
}
