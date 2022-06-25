import {Path} from "./RouteParameter.js"
import {Stop} from "./Customize.js"
import {Route} from "./Route.js"
import {Application} from "./Application.js"
import {AnyMiddleware} from "./Middleware.js"
import {RequestParamHandler} from "./RequestParamHandler.js"


export interface Router<TStop extends Stop> extends AnyMiddleware<TStop> {
  /**
   * Stack of configured routes
  */
  stack: any[]
  
  
  use<TStop extends Stop>(...rest: [Path, ...AnyMiddleware<TStop>[]] | [Path, Application] | AnyMiddleware<TStop>[]): this
  all<TStop extends Stop>(...rest: [Path, ...AnyMiddleware<TStop>[]] | [Path, Application]): this
  get<TStop extends Stop>(...rest: [Path, ...AnyMiddleware<TStop>[]] | [Path, Application]): this
  put<TStop extends Stop>(...rest: [Path, ...AnyMiddleware<TStop>[]] | [Path, Application]): this
  head<TStop extends Stop>(...rest: [Path, ...AnyMiddleware<TStop>[]] | [Path, Application]): this
  move<TStop extends Stop>(...rest: [Path, ...AnyMiddleware<TStop>[]] | [Path, Application]): this
  post<TStop extends Stop>(...rest: [Path, ...AnyMiddleware<TStop>[]] | [Path, Application]): this
  copy<TStop extends Stop>(...rest: [Path, ...AnyMiddleware<TStop>[]] | [Path, Application]): this
  lock<TStop extends Stop>(...rest: [Path, ...AnyMiddleware<TStop>[]] | [Path, Application]): this
  mkcol<TStop extends Stop>(...rest: [Path, ...AnyMiddleware<TStop>[]] | [Path, Application]): this
  merge<TStop extends Stop>(...rest: [Path, ...AnyMiddleware<TStop>[]] | [Path, Application]): this
  patch<TStop extends Stop>(...rest: [Path, ...AnyMiddleware<TStop>[]] | [Path, Application]): this
  trace<TStop extends Stop>(...rest: [Path, ...AnyMiddleware<TStop>[]] | [Path, Application]): this
  purge<TStop extends Stop>(...rest: [Path, ...AnyMiddleware<TStop>[]] | [Path, Application]): this
  unlock<TStop extends Stop>(...rest: [Path, ...AnyMiddleware<TStop>[]] | [Path, Application]): this
  search<TStop extends Stop>(...rest: [Path, ...AnyMiddleware<TStop>[]] | [Path, Application]): this
  delete<TStop extends Stop>(...rest: [Path, ...AnyMiddleware<TStop>[]] | [Path, Application]): this
  notify<TStop extends Stop>(...rest: [Path, ...AnyMiddleware<TStop>[]] | [Path, Application]): this
  report<TStop extends Stop>(...rest: [Path, ...AnyMiddleware<TStop>[]] | [Path, Application]): this
  options<TStop extends Stop>(...rest: [Path, ...AnyMiddleware<TStop>[]] | [Path, Application]): this
  connect<TStop extends Stop>(...rest: [Path, ...AnyMiddleware<TStop>[]] | [Path, Application]): this
  checkout<TStop extends Stop>(...rest: [Path, ...AnyMiddleware<TStop>[]] | [Path, Application]): this
  propfind<TStop extends Stop>(...rest: [Path, ...AnyMiddleware<TStop>[]] | [Path, Application]): this
  proppatch<TStop extends Stop>(...rest: [Path, ...AnyMiddleware<TStop>[]] | [Path, Application]): this
  subscribe<TStop extends Stop>(...rest: [Path, ...AnyMiddleware<TStop>[]] | [Path, Application]): this
  "m-search"<TStop extends Stop>(...rest: [Path, ...AnyMiddleware<TStop>[]] | [Path, Application]): this
  mkactivity<TStop extends Stop>(...rest: [Path, ...AnyMiddleware<TStop>[]] | [Path, Application]): this
  unsubscribe<TStop extends Stop>(...rest: [Path, ...AnyMiddleware<TStop>[]] | [Path, Application]): this

  
  route<T extends string>(prefix: T): Route
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
  param<TStop extends Stop>(name: string, handler: RequestParamHandler<TStop>): this
}


export default Router