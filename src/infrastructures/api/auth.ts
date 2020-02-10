import { AuthGateway } from '@/domain/auth';
import { Token } from '@/domain/auth/entity';
import {
  Agent,
  RequestBuilder,
  setBody,
  bindToken,
} from '@/infrastructures/http';

export class AuthApi implements AuthGateway {
  constructor(readonly agent: Agent) {}

  setToken(accessToken: string) {
    bindToken(this.agent, accessToken);
  }

  async login(param: { username: string; password: string }): Promise<Token> {
    const req = new RequestBuilder()
      .with(setBody(param))
      .build('/api/auth/token', 'POST');

    const res = await this.agent.run(req);
    const json = await res.json();
    if (res.status !== 200) {
      throw json.error;
    }

    return {
      type: json.type,
      accessToken: json.access_token,
      refreshToken: json.refresh_token,
      expiresIn: json.expires_in,
    };
  }
}
