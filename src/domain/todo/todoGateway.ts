import { Todo } from './entity';

export interface TodoGateway {
  todos(): Promise<Todo[]>;
}
