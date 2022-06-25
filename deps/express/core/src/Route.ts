import {Step} from "./Customize.js"
import {AnyMiddleware} from "./Middleware.js"


export interface Route {
  path: string;
  stack: any;
  use<TStep extends Step>(...rest: AnyMiddleware<TStep>[] | [AnyMiddleware<TStep>]): this
  all<TStep extends Step>(...rest: AnyMiddleware<TStep>[] | [AnyMiddleware<TStep>]): this
  get<TStep extends Step>(...rest: AnyMiddleware<TStep>[] | [AnyMiddleware<TStep>]): this
  put<TStep extends Step>(...rest: AnyMiddleware<TStep>[] | [AnyMiddleware<TStep>]): this
  head<TStep extends Step>(...rest: AnyMiddleware<TStep>[] | [AnyMiddleware<TStep>]): this
  move<TStep extends Step>(...rest: AnyMiddleware<TStep>[] | [AnyMiddleware<TStep>]): this
  post<TStep extends Step>(...rest: AnyMiddleware<TStep>[] | [AnyMiddleware<TStep>]): this
  copy<TStep extends Step>(...rest: AnyMiddleware<TStep>[] | [AnyMiddleware<TStep>]): this
  lock<TStep extends Step>(...rest: AnyMiddleware<TStep>[] | [AnyMiddleware<TStep>]): this
  mkcol<TStep extends Step>(...rest: AnyMiddleware<TStep>[] | [AnyMiddleware<TStep>]): this
  merge<TStep extends Step>(...rest: AnyMiddleware<TStep>[] | [AnyMiddleware<TStep>]): this
  patch<TStep extends Step>(...rest: AnyMiddleware<TStep>[] | [AnyMiddleware<TStep>]): this
  trace<TStep extends Step>(...rest: AnyMiddleware<TStep>[] | [AnyMiddleware<TStep>]): this
  purge<TStep extends Step>(...rest: AnyMiddleware<TStep>[] | [AnyMiddleware<TStep>]): this
  unlock<TStep extends Step>(...rest: AnyMiddleware<TStep>[] | [AnyMiddleware<TStep>]): this
  search<TStep extends Step>(...rest: AnyMiddleware<TStep>[] | [AnyMiddleware<TStep>]): this
  delete<TStep extends Step>(...rest: AnyMiddleware<TStep>[] | [AnyMiddleware<TStep>]): this
  notify<TStep extends Step>(...rest: AnyMiddleware<TStep>[] | [AnyMiddleware<TStep>]): this
  report<TStep extends Step>(...rest: AnyMiddleware<TStep>[] | [AnyMiddleware<TStep>]): this
  options<TStep extends Step>(...rest: AnyMiddleware<TStep>[] | [AnyMiddleware<TStep>]): this
  connect<TStep extends Step>(...rest: AnyMiddleware<TStep>[] | [AnyMiddleware<TStep>]): this
  checkout<TStep extends Step>(...rest: AnyMiddleware<TStep>[] | [AnyMiddleware<TStep>]): this
  propfind<TStep extends Step>(...rest: AnyMiddleware<TStep>[] | [AnyMiddleware<TStep>]): this
  proppatch<TStep extends Step>(...rest: AnyMiddleware<TStep>[] | [AnyMiddleware<TStep>]): this
  subscribe<TStep extends Step>(...rest: AnyMiddleware<TStep>[] | [AnyMiddleware<TStep>]): this
  "m-search"<TStep extends Step>(...rest: AnyMiddleware<TStep>[] | [AnyMiddleware<TStep>]): this
  mkactivity<TStep extends Step>(...rest: AnyMiddleware<TStep>[] | [AnyMiddleware<TStep>]): this
  unsubscribe<TStep extends Step>(...rest: AnyMiddleware<TStep>[] | [AnyMiddleware<TStep>]): this
}


export default Route