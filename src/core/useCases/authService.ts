import { AuthInteractor, AuthGateway, LocalStorage } from '@/core/interfaces';
import { Token } from '@/core/entities';

export class AuthService implements AuthInteractor {
  constructor(
    private readonly authGateway: AuthGateway,
    private readonly localStorage: LocalStorage
  ) {}

  async login(req: { username: string; password: string }): Promise<Token> {
    const token = await this.authGateway.login(req);

    return token;
  }
}
