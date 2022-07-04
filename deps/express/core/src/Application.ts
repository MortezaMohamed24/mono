import {Stop0} from "./Customize.js"
import {Path} from "./RouteParameter.js"
import {Server} from "node:http"
import {Locals} from "./Locals.js"
import {Request} from "./Request.js"
import {Response} from "./Response.js"
import {AnyMiddleware} from "./Middleware.js"
import {EventEmitter} from "node:events"
import {EnginCallback} from "./Engin.js"
import {ServerResponse} from "node:http"
import {IncomingMessage} from "node:http"
import {RequestParamHandler} from "./RequestParamHandler.js"


type AnyRequest = Request | NativeRequest
type AnyResponse = Response | NativeResponse
type NativeRequest = IncomingMessage
type NativeResponse = ServerResponse


export interface Application<TLocals extends Locals = Locals> extends EventEmitter {
  /**
   * Used to get all registered routes in Express Application
  */
  map: any
  stack: unknown
  locals: TLocals
  /**
   * The app.routes object houses all of the routes defined mapped by the
   * associated HTTP verb. This object may be used for introspection
   * capabilities, for example Express uses this internally not only for
   * routing but to provide default OPTIONS behaviour unless app.options()
   * is used. Your application or framework may also remove routes by
   * simply by removing them from this object.
  */
  routes: any
  router: string
  _router: any
  settings: any
  resource: any
  /**
   * The app.mountpath property contains one or more path patterns on which a sub-app was mounted.
   */
  mountpath: string | string[]


  /**
   * Express instance itself is a request handler, which could be invoked without
   * third argument.
   */
  (inbound: AnyRequest, outbound: AnyResponse): any

  /**
   * The mount event is fired on a sub-app, when it is mounted on a parent app.
   * The parent app is passed to the callback function.
   *
   * NOTE:
   * Sub-apps will:
   *  - Not inherit the value of settings that have a default value. You must set the value in the sub-app.
   *  - Inherit the value of settings with no default value.
   */
  on(event: string, callback: (parent: Application) => void): this
  /**
   * Initialize the server.
   *
   *   - setup default configuration
   *   - setup default middleware
   *   - setup route reflection methods
   */
  init(): void
  /**
   * Assign `setting` to `val`, or return `setting`"s value.
   *
   *  app.set("foo", "bar")
   *  app.get("foo")
   *  // => "bar"
   *  app.set("foo", ["bar", "baz"])
   *  app.get("foo")
   *  // => ["bar", "baz"]
   *
   * Mounted servers inherit their parent server"s settings.
   */
  set(setting: string, val: any): this
  param<TStop extends Stop0>(name: string | string[], handler: RequestParamHandler<TStop>): this
  /**
   * Alternatively, you can pass only a callback, in which case you have the opportunity to alter the app.param()
   *
   * @deprecated since version 4.11
   */
  param<TStop extends Stop0>(callback: (name: string, matcher: RegExp) => RequestParamHandler<TStop>): this
  /**
   * Return the app"s absolute pathname
   * based on the parent(s) that have
   * mounted it.
   *
   * For example if the application was
   * mounted as "/admin", which itself
   * was mounted as "/blog" then the
   * return value would be "/blog/admin".
   */
  path(): string
  /**
   * Register the given template engine callback `fn`
   * as `ext`.
   *
   * By default will `require()` the engine based on the
   * file extension. For example if you try to render
   * a "foo.jade" file Express will invoke the following internally:
   *
   *   app.engine("jade", require("jade").__express)
   *
   * For engines that do not provide `.__express` out of the box,
   * or if you wish to "map" a different extension to the template engine
   * you may use this method. For example mapping the EJS template engine to
   * ".html" files:
   *
   *   app.engine("html", require("ejs").renderFile)
   *
   * In this case EJS provides a `.renderFile()` method with
   * the same signature that Express expects: `(path, options, callback)`,
   * though note that it aliases this method as `ejs.__express` internally
   * so if you"re using ".ejs" extensions you dont need to do anything.
   *
   * Some template engines do not follow this convention, the
   * [Consolidate.js](https://github.com/visionmedia/consolidate.js)
   * library was created to map all of node"s popular template
   * engines to follow this convention, thus allowing them to
   * work seamlessly within Express.
   */
  engine(ext: string, callback: EnginCallback): this
  /** 
   * Enable `setting`. 
  */
  enable(setting: string): this
  /**
   * Render the given view `name` name with `options`
   * and a callback accepting an error and the
   * rendered template string.
   *
   * Example:
   *
   *  app.render("email", { name: "Tobi" }, function(err, html){
   *    // ...
   *  })
   */
  render(name: string, options?: object, callback?: (err: Error, html: string) => void): void
  render(name: string, callback: (err: Error, html: string) => void): void
  /**
   * Listen for connections.
   *
   * A node `http.Server` is returned, with this
   * application (which is a `Function`) as its
   * callback. If you wish to create both an HTTP
   * and HTTPS server you may do so with the "http"
   * and "https" modules as shown here:
   *
   *  var http = require("http")
   *    , https = require("https")
   *    , express = require("express")
   *    , app = express()
   *
   *  http.createServer(app).listen(80)
   *  https.createServer({ ... }, app).listen(443)
   */
  listen(port: number, hostname: string, backlog: number, callback?: () => void): Server
  listen(port: number, hostname: string, callback?: () => void): Server
  listen(port: number, callback?: () => void): Server
  listen(callback?: () => void): Server
  listen(path: string, callback?: () => void): Server
  listen(handle: any, listeningListener?: () => void): Server
  /**
   * Check if `setting` is enabled (truthy).
   *
   *  app.enabled("foo")
   *  // => false
   *
   *  app.enable("foo")
   *  app.enabled("foo")
   *  // => true
  */
  enabled(setting: string): boolean
  /** 
   * Disable `setting`. 
  */
  disable(setting: string): this
  /**
   * Check if `setting` is disabled.
   *
   *  app.disabled("foo")
   *  // => true
   *
   *  app.enable("foo")
   *  app.disabled("foo")
   *  // => false
   */
  disabled(setting: string): boolean
  /**
   * Initialize application configuration.
  */
  defaultConfiguration(): void
  

  use<TStop extends Stop0>(...rest: [Path, Application] | [Path, ...AnyMiddleware<TStop>[]] | AnyMiddleware<TStop>[]): this 
  all<TStop extends Stop0>(path: Path, ...rest: AnyMiddleware<TStop>[] | [Application]): this
  put<TStop extends Stop0>(path: Path, ...rest: AnyMiddleware<TStop>[] | [Application]): this
  get<TStop extends Stop0>(path: Path, ...rest: AnyMiddleware<TStop>[] | [Application]): this
  copy<TStop extends Stop0>(path: Path, ...rest: AnyMiddleware<TStop>[] | [Application]): this
  lock<TStop extends Stop0>(path: Path, ...rest: AnyMiddleware<TStop>[] | [Application]): this
  post<TStop extends Stop0>(path: Path, ...rest: AnyMiddleware<TStop>[] | [Application]): this
  head<TStop extends Stop0>(path: Path, ...rest: AnyMiddleware<TStop>[] | [Application]): this
  move<TStop extends Stop0>(path: Path, ...rest: AnyMiddleware<TStop>[] | [Application]): this
  merge<TStop extends Stop0>(path: Path, ...rest: AnyMiddleware<TStop>[] | [Application]): this
  mkcol<TStop extends Stop0>(path: Path, ...rest: AnyMiddleware<TStop>[] | [Application]): this
  purge<TStop extends Stop0>(path: Path, ...rest: AnyMiddleware<TStop>[] | [Application]): this
  patch<TStop extends Stop0>(path: Path, ...rest: AnyMiddleware<TStop>[] | [Application]): this
  trace<TStop extends Stop0>(path: Path, ...rest: AnyMiddleware<TStop>[] | [Application]): this
  unlock<TStop extends Stop0>(path: Path, ...rest: AnyMiddleware<TStop>[] | [Application]): this
  notify<TStop extends Stop0>(path: Path, ...rest: AnyMiddleware<TStop>[] | [Application]): this
  report<TStop extends Stop0>(path: Path, ...rest: AnyMiddleware<TStop>[] | [Application]): this
  search<TStop extends Stop0>(path: Path, ...rest: AnyMiddleware<TStop>[] | [Application]): this
  delete<TStop extends Stop0>(path: Path, ...rest: AnyMiddleware<TStop>[] | [Application]): this
  options<TStop extends Stop0>(path: Path, ...rest: AnyMiddleware<TStop>[] | [Application]): this
  checkout<TStop extends Stop0>(path: Path, ...rest: AnyMiddleware<TStop>[] | [Application]): this
  subscribe<TStop extends Stop0>(path: Path, ...rest: AnyMiddleware<TStop>[] | [Application]): this
  mkactivity<TStop extends Stop0>(path: Path, ...rest: AnyMiddleware<TStop>[] | [Application]): this
  "m-search"<TStop extends Stop0>(path: Path, ...rest: AnyMiddleware<TStop>[] | [Application]): this
  unsubscribe<TStop extends Stop0>(path: Path, ...rest: AnyMiddleware<TStop>[] | [Application]): this
}


export default Application