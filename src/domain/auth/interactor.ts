import { Token } from './dto';
import { Result } from '@/domain/dto';

export class TokenContainer {
  accessToken: string = '';

  set(accessToken: string): void {
    this.accessToken = accessToken;
  }

  get(): string {
    return this.accessToken;
  }
}

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
