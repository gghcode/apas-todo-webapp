import { Token } from './dto';
import { TaskResult, Result } from '@/domain/dto';

export interface AuthInteractor {
  isAuthenticated(): boolean;
  login(req: {
    username: string;
    password: string;
  }): Promise<Result<Token, Error>>;
}

export interface AuthGateway {
  login(req: { username: string; password: string }): Promise<Token>;
}

export interface LoginResult {
  readonly token?: Token;
  readonly error?: any;
}
