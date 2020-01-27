import { User } from '.';

export interface UserGateway {
  me(): Promise<User>;
}
