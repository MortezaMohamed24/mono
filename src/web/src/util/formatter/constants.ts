/** A wildcard symbol matching any type name */
export type ANY = typeof ANY;
export const ANY = Symbol("checker-any-type-name");

/** A constant symbol indicating the invalidity of a value */
export type INVALID = typeof INVALID;
export const INVALID = Symbol("checker-invalid-value");