import { AuthUsecase } from './authUsecase';
import { AuthGateway } from './authGateway';

export class AuthService implements AuthUsecase {
  constructor(
    private readonly authGateway: AuthGateway // private readonly localStorage: LocalStorage
  ) {}

  async login(req: LoginRequest): Promise<TokenResponse> {
    const token = await this.authGateway.login(req);
    return token;
  }
}
