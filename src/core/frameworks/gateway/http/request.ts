export type AllowMethods = 'GET' | 'POST' | 'PUT' | 'DELETE';
export interface Request {
  path: string;
  method: string;
  body?: any;
  headers: any;
}
