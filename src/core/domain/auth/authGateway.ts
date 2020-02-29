export interface AuthGateway {
  setAccessToken(token: string): void;
  login(req: LoginRequest): Promise<TokenResponse>;
}
