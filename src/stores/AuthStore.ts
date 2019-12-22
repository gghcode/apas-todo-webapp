import {
  AuthInteractor,
  LoginResult,
  TokenStorage,
  AuthGateway,
} from '@/domain/auth/interactor';

export class AuthStore implements AuthInteractor {
  constructor(
    readonly authGateway: AuthGateway,
    readonly tokenStorage: TokenStorage
  ) {}

  isAuthenticated(): boolean {
    const token = this.tokenStorage.getToken();
    if (token == null) {
      return false;
    }

    return token != null;
  }

  async login(req: {
    username: string;
    password: string;
  }): Promise<LoginResult> {
    const res = await this.authGateway.login(req);
    if (res.error) {
      return { error: res.error };
    }

    this.tokenStorage.saveToken(res.data!.accessToken);

    return {
      token: res.data,
    };
  }
}
