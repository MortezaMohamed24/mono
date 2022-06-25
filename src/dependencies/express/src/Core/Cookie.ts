export interface CookieOptions {
  path?: string | undefined
  domain?: string | undefined
  secure?: boolean | undefined
  encode?: ((val: string) => string) | undefined
  maxAge?: number | undefined
  signed?: boolean | undefined
  expires?: Date | undefined
  sameSite?: boolean | "lax" | "strict" | "none" | undefined
  httpOnly?: boolean | undefined
}