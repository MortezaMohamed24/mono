import * as QS from "../QueryString/index.js"
import * as QUERY from "./QueryParserMiddleware.js"
import * as COOKIE from "./Cookie.js"
import * as MEDIA from "./Media.js"
import * as ROUTER from "./Router.js"
import * as LOCALS from "./Locals.js"
import * as EXPRESS from "./Express.js"
import * as REQUEST from "./Request.js"
import * as PROCEED from "./Proceed.js"
import * as RESPONSE from "./Response.js"
import * as CUSTOMIZE from "./Customize.js"
import * as MIDDLEWARE from "./Middleware.js"
import * as bodyParser from "body-parser"
import * as serveStatic from "serve-static"
import * as APPLICATION from "./Application.js"
import * as ROUTER_OPTIONS from "./RouterOptions.js"
import * as ROUTE_PARAMETER from "./RouteParameter.js"


/**
 * Creates an Express application. The express() function is a 
 * top-level function exported by the express module.
 */
declare function express(): EXPRESS.Express

declare namespace express {
  /**
   * This is a built-in middleware function in Express. It parses 
   * incoming requests with Buffer payloads and is based on body-parser.
   * @since 4.17.0
   */
  let raw: typeof bodyParser.raw
  /**
   * This is a built-in middleware function in Express. It parses 
   * incoming requests with text payloads and is based on body-parser.
   * @since 4.17.0
   */
  let text: typeof bodyParser.text
  /**
   * This is a built-in middleware function in Express. It parses 
   * incoming requests with JSON payloads and is based on body-parser.
   * @since 4.16.0
   */
  let json: typeof bodyParser.json
  /**
   * This is a built-in middleware function in Express. 
   * It serves static files and is based on serve-static.
   */
  let static: serveStatic.RequestHandlerConstructor<Response>
  /**
   * This is a built-in middleware function in Express. It parses 
   * incoming requests with urlencoded payloads and is based on body-parser.
   * @since 4.16.0
   */
  let urlencoded: typeof bodyParser.urlencoded


  /**
   * These are the exposed prototypes.
   */
  let request: Request
  let response: Response
  let application: Application


  /**
   * This is a built-in middleware function in Express. 
   * It parses incoming request query parameters.
   */
  export function query(
    options: QS.IParseOptions | typeof QS.parse,
  ): (
    QUERY.QueryParserMiddleware
  )

  export function Router<TStep extends Step>(
    options?: undefined | ROUTER_OPTIONS.RouterOptions
  ): ROUTER.Router<TStep>


  export interface Step extends CUSTOMIZE.Step {

  }

  export interface Line extends CUSTOMIZE.Line {

  }

  export interface Locals extends LOCALS.Locals {

  }

  export interface Express extends EXPRESS.Express {

  }

  export interface Request<
    TLocals extends LOCALS.Locals = LOCALS.Locals, 
    TParams extends ROUTE_PARAMETER.Params = ROUTE_PARAMETER.Params,
  > extends REQUEST.Request<TLocals, TParams> {

  }

  export interface Proceed extends PROCEED.Proceed {

  }

  export interface Response<
    TBody extends unknown = unknown,
    TLocals extends Locals = Locals,
    TStatus extends number = number
  > extends RESPONSE.Response {

  }

  export interface MediaType extends MEDIA.MediaType {

  }

  export interface Customize<
    TStep extends CUSTOMIZE.Step, 
    TCustomizations extends CUSTOMIZE.Customizations
  > extends CUSTOMIZE.Customize<TStep, TCustomizations> {

  }

  export interface Middleware<TStep extends CUSTOMIZE.Step> extends MIDDLEWARE.Middleware<TStep> {

  }

  export interface Application<
    TLocals extends LOCALS.Locals = LOCALS.Locals
  > extends APPLICATION.Application<TLocals> {
    
  }

  export interface CookieOptions extends COOKIE.CookieOptions {
    
  }
  
  export interface Customization extends CUSTOMIZE.Customization {

  }
}


export = express