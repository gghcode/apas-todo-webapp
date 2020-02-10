import { UserGateway } from '@/domain/user';
import { User } from '@/domain/user/entity';
// import { RestAgent } from '@/infrastructures/restAgent';

export class UserApi implements UserGateway {
  // constructor(readonly agent: RestAgent) {}

  async me(): Promise<User> {
    let a: any = {};
    return a;
    // const res = await this.agent.get('/api/user');

    // const json = await res.json();
    // if (!res.ok) {
    //   throw new Error(json);
    // }

    // return json;
  }
}
