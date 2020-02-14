import { AuthGateway } from '@/core/interfaces';
import { Agent } from '@/core/interfaces/http';
import { Token } from '@/core/entities';

export class RestAuthGateway implements AuthGateway {
  constructor(private readonly agent: Agent) {}

  setToken(accessToken: string) {
    // bindToken(this.agent, accessToken);
  }

  async login(req: { username: string; password: string }): Promise<Token> {
    const json: any = {};

    return {
      type: json.type,
      accessToken: json.access_token,
      refreshToken: json.refresh_token,
      expiresIn: json.expires_in,
    };
  }
}
