export interface TodoGateway {
  todos(): Promise<TodoResponse[]>;
}
