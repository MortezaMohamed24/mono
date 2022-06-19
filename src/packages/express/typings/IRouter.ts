export interface IRouter extends RequestHandler {
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
  param(name: string, handler: RequestParamHandler): this

  /**
   * Alternatively, you can pass only a callback, in which case you have the opportunity to alter the app.param()
   *
   * @deprecated since version 4.11
   */
  param(callback: (name: string, matcher: RegExp) => RequestParamHandler): this

  /**
   * Special-cased "all" method, applying the given route `path`,
   * middleware, and callback to _every_ HTTP method.
   */
  all: IRouterMatcher<this, "all">
  get: IRouterMatcher<this, "get">
  post: IRouterMatcher<this, "post">
  put: IRouterMatcher<this, "put">
  delete: IRouterMatcher<this, "delete">
  patch: IRouterMatcher<this, "patch">
  options: IRouterMatcher<this, "options">
  head: IRouterMatcher<this, "head">

  checkout: IRouterMatcher<this>
  connect: IRouterMatcher<this>
  copy: IRouterMatcher<this>
  lock: IRouterMatcher<this>
  merge: IRouterMatcher<this>
  mkactivity: IRouterMatcher<this>
  mkcol: IRouterMatcher<this>
  move: IRouterMatcher<this>
  "m-search": IRouterMatcher<this>
  notify: IRouterMatcher<this>
  propfind: IRouterMatcher<this>
  proppatch: IRouterMatcher<this>
  purge: IRouterMatcher<this>
  report: IRouterMatcher<this>
  search: IRouterMatcher<this>
  subscribe: IRouterMatcher<this>
  trace: IRouterMatcher<this>
  unlock: IRouterMatcher<this>
  unsubscribe: IRouterMatcher<this>

  use: IRouterHandler<this> & IRouterMatcher<this>

  route<T extends string>(prefix: T): IRoute<T>
  route(prefix: PathParams): IRoute
  /**
   * Stack of configured routes
   */
  stack: any[]
}
