import {Stop0} from "./Customize.js"
import {AnyMiddleware} from "./Middleware.js"


export interface Route {
  path: string;
  stack: any;
  use<TStop extends Stop0>(...rest: AnyMiddleware<TStop>[] | [AnyMiddleware<TStop>]): this
  all<TStop extends Stop0>(...rest: AnyMiddleware<TStop>[] | [AnyMiddleware<TStop>]): this
  get<TStop extends Stop0>(...rest: AnyMiddleware<TStop>[] | [AnyMiddleware<TStop>]): this
  put<TStop extends Stop0>(...rest: AnyMiddleware<TStop>[] | [AnyMiddleware<TStop>]): this
  head<TStop extends Stop0>(...rest: AnyMiddleware<TStop>[] | [AnyMiddleware<TStop>]): this
  move<TStop extends Stop0>(...rest: AnyMiddleware<TStop>[] | [AnyMiddleware<TStop>]): this
  post<TStop extends Stop0>(...rest: AnyMiddleware<TStop>[] | [AnyMiddleware<TStop>]): this
  copy<TStop extends Stop0>(...rest: AnyMiddleware<TStop>[] | [AnyMiddleware<TStop>]): this
  lock<TStop extends Stop0>(...rest: AnyMiddleware<TStop>[] | [AnyMiddleware<TStop>]): this
  mkcol<TStop extends Stop0>(...rest: AnyMiddleware<TStop>[] | [AnyMiddleware<TStop>]): this
  merge<TStop extends Stop0>(...rest: AnyMiddleware<TStop>[] | [AnyMiddleware<TStop>]): this
  patch<TStop extends Stop0>(...rest: AnyMiddleware<TStop>[] | [AnyMiddleware<TStop>]): this
  trace<TStop extends Stop0>(...rest: AnyMiddleware<TStop>[] | [AnyMiddleware<TStop>]): this
  purge<TStop extends Stop0>(...rest: AnyMiddleware<TStop>[] | [AnyMiddleware<TStop>]): this
  unlock<TStop extends Stop0>(...rest: AnyMiddleware<TStop>[] | [AnyMiddleware<TStop>]): this
  search<TStop extends Stop0>(...rest: AnyMiddleware<TStop>[] | [AnyMiddleware<TStop>]): this
  delete<TStop extends Stop0>(...rest: AnyMiddleware<TStop>[] | [AnyMiddleware<TStop>]): this
  notify<TStop extends Stop0>(...rest: AnyMiddleware<TStop>[] | [AnyMiddleware<TStop>]): this
  report<TStop extends Stop0>(...rest: AnyMiddleware<TStop>[] | [AnyMiddleware<TStop>]): this
  options<TStop extends Stop0>(...rest: AnyMiddleware<TStop>[] | [AnyMiddleware<TStop>]): this
  connect<TStop extends Stop0>(...rest: AnyMiddleware<TStop>[] | [AnyMiddleware<TStop>]): this
  checkout<TStop extends Stop0>(...rest: AnyMiddleware<TStop>[] | [AnyMiddleware<TStop>]): this
  propfind<TStop extends Stop0>(...rest: AnyMiddleware<TStop>[] | [AnyMiddleware<TStop>]): this
  proppatch<TStop extends Stop0>(...rest: AnyMiddleware<TStop>[] | [AnyMiddleware<TStop>]): this
  subscribe<TStop extends Stop0>(...rest: AnyMiddleware<TStop>[] | [AnyMiddleware<TStop>]): this
  "m-search"<TStop extends Stop0>(...rest: AnyMiddleware<TStop>[] | [AnyMiddleware<TStop>]): this
  mkactivity<TStop extends Stop0>(...rest: AnyMiddleware<TStop>[] | [AnyMiddleware<TStop>]): this
  unsubscribe<TStop extends Stop0>(...rest: AnyMiddleware<TStop>[] | [AnyMiddleware<TStop>]): this
}


export default Route