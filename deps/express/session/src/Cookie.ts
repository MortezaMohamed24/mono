export declare class Cookie implements CookieOptions {
  /** Returns the original `maxAge` (time-to-live), in milliseconds, of the session cookie. */
  originalMaxAge: number
  maxAge?: number | undefined
  signed?: boolean | undefined
  expires?: Date | undefined
  httpOnly?: boolean | undefined
  path?: string | undefined
  domain?: string | undefined
  secure?: boolean | "auto" | undefined
  sameSite?: boolean | "lax" | "strict" | "none" | undefined
}


export default Cookie