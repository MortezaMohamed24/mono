export const PROTOCOL             = "http" as const;
export const HOSTNAME             = "localhost" as const;
export const PORT                 = 3000 as const;
export const HOST                 = `${HOSTNAME}:${PORT}` as const;
export const ORIGIN               = `${PROTOCOL}://${HOST}` as const;
export const LOGIN_URL            = `${ORIGIN}/login` as const;
export const SIGNUP_URL           = `${origin}/api/users/create` as const;
export const LOGIN_STATUS_URL     = `${ORIGIN}/login/status` as const;