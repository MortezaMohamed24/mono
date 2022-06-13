export const PORT     = 3000 as const;
export const HOST     = `localhost` as const;
export const HOSTNAME = `${HOST}:${PORT}` as const;
export const ORIGIN   = `http://${HOSTNAME}` as const;