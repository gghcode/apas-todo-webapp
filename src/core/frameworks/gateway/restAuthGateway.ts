import { Agent, RequestBuilder, setBody } from '@/core/frameworks/gateway/http';
import { AuthGateway } from '@/core/domain/auth';
import { Context } from './context';
import { setTokenToContext } from './token';

export class RestAuthGateway implements AuthGateway {
  constructor(private readonly agent: Agent, private readonly ctx: Context) {}

  setAccessToken(token: string): void {
    setTokenToContext(this.ctx, token);
  }

  async login(param: LoginRequest): Promise<TokenResponse> {
    const req = new RequestBuilder('/api/auth/token', 'POST')
      .with(setBody(param))
      .build();

    const res = await this.agent.run(req);
    const json = res.json;
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
