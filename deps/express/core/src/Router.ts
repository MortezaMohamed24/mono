import {Path} from "./RouteParameter"
import {Step} from "./Customize"
import {Middleware} from "./Middleware"
import {Application} from "./Application"
import {RequestParamHandler} from "./RequestParamHandler.js"


export interface Router<TStep extends Step> extends Middleware<TStep> {
  /**
   * Stack of configured routes
  */
  stack: any[]
  
  
  use<TStep extends Step>(...rest: [Path, ...Middleware<TStep>[]] | [Path, Application] | Middleware<TStep>[]): this
  all<TStep extends Step>(...rest: [Path, ...Middleware<TStep>[]] | [Path, Application]): this
  get<TStep extends Step>(...rest: [Path, ...Middleware<TStep>[]] | [Path, Application]): this
  put<TStep extends Step>(...rest: [Path, ...Middleware<TStep>[]] | [Path, Application]): this
  head<TStep extends Step>(...rest: [Path, ...Middleware<TStep>[]] | [Path, Application]): this
  move<TStep extends Step>(...rest: [Path, ...Middleware<TStep>[]] | [Path, Application]): this
  post<TStep extends Step>(...rest: [Path, ...Middleware<TStep>[]] | [Path, Application]): this
  copy<TStep extends Step>(...rest: [Path, ...Middleware<TStep>[]] | [Path, Application]): this
  lock<TStep extends Step>(...rest: [Path, ...Middleware<TStep>[]] | [Path, Application]): this
  mkcol<TStep extends Step>(...rest: [Path, ...Middleware<TStep>[]] | [Path, Application]): this
  merge<TStep extends Step>(...rest: [Path, ...Middleware<TStep>[]] | [Path, Application]): this
  patch<TStep extends Step>(...rest: [Path, ...Middleware<TStep>[]] | [Path, Application]): this
  trace<TStep extends Step>(...rest: [Path, ...Middleware<TStep>[]] | [Path, Application]): this
  purge<TStep extends Step>(...rest: [Path, ...Middleware<TStep>[]] | [Path, Application]): this
  unlock<TStep extends Step>(...rest: [Path, ...Middleware<TStep>[]] | [Path, Application]): this
  search<TStep extends Step>(...rest: [Path, ...Middleware<TStep>[]] | [Path, Application]): this
  delete<TStep extends Step>(...rest: [Path, ...Middleware<TStep>[]] | [Path, Application]): this
  notify<TStep extends Step>(...rest: [Path, ...Middleware<TStep>[]] | [Path, Application]): this
  report<TStep extends Step>(...rest: [Path, ...Middleware<TStep>[]] | [Path, Application]): this
  options<TStep extends Step>(...rest: [Path, ...Middleware<TStep>[]] | [Path, Application]): this
  connect<TStep extends Step>(...rest: [Path, ...Middleware<TStep>[]] | [Path, Application]): this
  checkout<TStep extends Step>(...rest: [Path, ...Middleware<TStep>[]] | [Path, Application]): this
  propfind<TStep extends Step>(...rest: [Path, ...Middleware<TStep>[]] | [Path, Application]): this
  proppatch<TStep extends Step>(...rest: [Path, ...Middleware<TStep>[]] | [Path, Application]): this
  subscribe<TStep extends Step>(...rest: [Path, ...Middleware<TStep>[]] | [Path, Application]): this
  "m-search"<TStep extends Step>(...rest: [Path, ...Middleware<TStep>[]] | [Path, Application]): this
  mkactivity<TStep extends Step>(...rest: [Path, ...Middleware<TStep>[]] | [Path, Application]): this
  unsubscribe<TStep extends Step>(...rest: [Path, ...Middleware<TStep>[]] | [Path, Application]): this

  
  route<T extends string>(prefix: T): Route<T>
  route(prefix: Path): Route
  /**
   * Map the given param placeholder `name`(s) to the given callback(s).
   *
   * Parameter mapping is used to provide pre-conditions to routes
   * which use normalized placeholders. For example a _:user_id_ parameter
   * could automatically load a user"s information from the database without
   * any additional code,
   *
   * The callback uses the samesignature as middleware, the only differencing
   * being that the value of the placeholder is passed, in this case the _id_
   * of the user. Once the `next()` function is invoked, just like middleware
   * it will continue on to execute the route, or subsequent parameter functions.
   *
   *    app.param("user_id", function(req, res, next, id){
   *    User.find(id, function(err, user){
   *      if (err) {
   *      next(err)
   *      } else if (user) {
   *      req.user = user
   *      next()
   *      } else {
   *      next(new Error("failed to load user"))
   *      }
   *    })
   *    })
  */
  param<TStep extends Step>(name: string, handler: RequestParamHandler<Step>): this
}
