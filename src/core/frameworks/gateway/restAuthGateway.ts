import { Agent, RequestBuilder, setBody } from '@/core/frameworks/gateway/http';
import { AuthGateway } from '@/core/domain/auth';

export class RestAuthGateway implements AuthGateway {
  constructor(private readonly agent: Agent) {}

  setToken(accessToken: string) {
    // bindToken(this.agent, accessToken);
  }

  async login(param: LoginRequest): Promise<TokenResponse> {
    const req = new RequestBuilder()
      .with(setBody(param))
      .build('/api/auth/token', 'POST');

    const res = await this.agent.run(req);
    const json = await res.json();
    if (!res.ok) {
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
