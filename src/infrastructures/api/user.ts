import { UserGateway } from '@/domain/user';
import { User } from '@/domain/user/entity';
import { ApiAgent } from '@/infrastructures/agent';

export class UserApi implements UserGateway {
  constructor(readonly agent: ApiAgent) {}

  async me(): Promise<User> {
    const res = await this.agent.get('/api/user');

    const json = await res.json();
    if (!res.ok) {
      throw new Error(json);
    }

    return json;
  }
}
