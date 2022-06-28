export const K_REQUEST = Symbol("AUTH:K_REQUEST")
export const K_SESSION = Symbol("AUTH:K_SESSION")
export const DEFAULT_K_REQUEST = "AUTH"
export const DEFAULT_K_SESSION = "__AUTH__"

export type K_REQUEST = typeof K_REQUEST
export type K_SESSION = typeof K_SESSION
export type DEFAULT_K_REQUEST = typeof DEFAULT_K_REQUEST
export type DEFAULT_K_SESSION = typeof DEFAULT_K_SESSION