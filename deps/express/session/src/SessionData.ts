import {Cookie} from "../Cookie.js"


/**
 * This interface allows you to declare additional properties on your session object using [declaration merging](https://www.typescriptlang.org/docs/handbook/declaration-merging.html).
 *
 * @example
 * declare module "express-session' {
 * interface SessionData {
 * views: number
 * }
 * }
 *
*/
export interface SessionData {
  cookie: Cookie
}


export default SessionData