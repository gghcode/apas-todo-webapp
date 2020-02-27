export interface AuthGateway {
  login(req: LoginRequest): Promise<TokenResponse>;
}
