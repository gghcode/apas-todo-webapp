import { AuthGateway } from '@/domain/auth/interactor';
import { Token } from '@/domain/auth/dto';
import { ApiAgent } from '@/infrastructures/agent';

export class AuthApi implements AuthGateway {
  constructor(readonly agent: ApiAgent) {}

  async login(req: { username: string; password: string }): Promise<Token> {
    const res = await this.agent.post('/api/auth/token', {
      method: 'POST',
      body: req,
    });

    const json = await res.json();
    if (res.status !== 200) {
      throw new Error(json);
    }

    return {
      type: json.type,
      accessToken: json.access_token,
      refreshToken: json.refresh_token,
      expiresIn: json.expires_in,
    };
  }
}
