import { Token } from '@/core/entities';

export interface AuthInteractor {
  login(req: { username: string; password: string }): Promise<Token>;
}
