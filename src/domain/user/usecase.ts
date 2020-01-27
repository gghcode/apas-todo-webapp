import { User } from './entity';

export interface UserUsecase {
  me(): Promise<User>;
}
