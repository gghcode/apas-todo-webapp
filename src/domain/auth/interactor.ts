import { Token } from './dto';
import { TaskResult } from '@/domain/dto';

export interface AuthInteractor {
  login(req: { username: string; password: string }): Promise<LoginResult>;
}

export interface AuthGateway {
  login(req: {
    username: string;
    password: string;
  }): Promise<TaskResult<Token>>;
}

export interface TokenStorage {
  getToken(): string | null;
  saveToken(token: string): void;
  destroyToken(): void;
}

export interface LoginResult {
  readonly token?: Token;
  readonly error?: any;
}
