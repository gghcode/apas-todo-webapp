import {
  AuthInteractor,
  AuthGateway,
  TokenContainer,
} from '@/domain/auth/interactor';
import { KeyValueStorage } from '@/domain/persist/storage';
import { Token } from '@/domain/auth/dto';
import { Result } from '@/domain/dto';

const _accessTokenKey = 'access_token_key';
const _refreshTokenKey = 'refresh_token_key';

export class AuthStore implements AuthInteractor {
  constructor(
    readonly tokenContainer: TokenContainer,
    readonly authGateway: AuthGateway,
    readonly keyValueStorage: KeyValueStorage
  ) {}

  isAuthenticated(): boolean {
    return this.tokenContainer.get() !== '';
  }

  async login(req: {
    username: string;
    password: string;
  }): Promise<Result<Token, Error>> {
    let token: Token;

    try {
      token = await this.authGateway.login(req);
    } catch (err) {
      return [undefined, err];
    }

    this.keyValueStorage.set(_accessTokenKey, token.accessToken);
    this.keyValueStorage.set(_refreshTokenKey, token.refreshToken);
    this.tokenContainer.set(token.accessToken);

    return [token, undefined];
  }
}
