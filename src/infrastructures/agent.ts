export interface Request {
  body: any;
}

export interface ApiAgent {
  post(url: string, req: Request): Promise<any>;
  get(url: string): Promise<any>;
  put(url: string): Promise<any>;
  delete(url: string): Promise<any>;
}
