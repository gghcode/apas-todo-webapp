import { observable } from 'mobx';

const _accessTokenKey = 'access_token_key';
const _refreshTokenKey = 'refresh_token_key';

export class AuthStore {
  @observable
  authenticated: boolean = false;

  authenticate() {
    this.authenticated = true;
  }
  // constructor(
  //   readonly tokenContainer: TokenContainer,
  //   readonly authGateway: AuthGateway,
  //   readonly keyValueStorage: KeyValueStorage
  // ) {
  //   const token = this.keyValueStorage.get(_accessTokenKey);
  //   this.authenticated = token != null;
  //   if (this.authenticated) {
  //     tokenContainer.set(token!);
  //   }
  // }
  // async login(req: {
  //   username: string;
  //   password: string;
  // }): Promise<Result<Token, Error>> {
  //   let token: Token;
  //   try {
  //     token = await this.authGateway.login(req);
  //   } catch (err) {
  //     return [undefined, err];
  //   }
  //   this.keyValueStorage.set(_accessTokenKey, token.accessToken);
  //   this.keyValueStorage.set(_refreshTokenKey, token.refreshToken);
  //   this.tokenContainer.set(token.accessToken);
  //   this.authenticated = true;
  //   return [token, undefined];
  // }
}
