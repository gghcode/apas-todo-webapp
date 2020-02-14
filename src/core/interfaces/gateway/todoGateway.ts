import { Todo } from '@/core/entities';

export interface TodoGateway {
  todos(): Promise<Todo[]>;
}
