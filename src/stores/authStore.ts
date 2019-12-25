import { AuthInteractor, AuthGateway } from '@/domain/auth/interactor';
import { KeyValueStorage } from '@/domain/persist/storage';
import { Token } from '@/domain/auth/dto';
import { Result } from '@/domain/dto';

const _accessTokenKey = 'access_token_key';
const _refreshTokenKey = 'refresh_token_key';

export class AuthStore implements AuthInteractor {
  constructor(
    readonly authGateway: AuthGateway,
    readonly keyValueStorage: KeyValueStorage
  ) {}

  isAuthenticated(): boolean {
    return false;
    // const token = this.keyValueStorage.getToken();
    // if (token == null) {
    //   return false;
    // }
    // return token != null;
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

    return [token, undefined];
  }
}
