import {raw} from "body-parser"
import {text} from "body-parser"
import {json} from "body-parser"
import * as serveStatic from "serve-static"
import {Query} from "./Query.js"
import {Request} from "./Request.js"
import {Express} from "./Express.js"
import {Response} from "./Response.js"
import {urlencoded} from "body-parser"
import {Application} from "./Application.js"
import {RouterFactory} from "./RouterFactory.js"


/**
 * Creates an Express application. The express() function is a 
 * top-level function exported by the express module.
*/
export declare const express: {
  (): Express

  /**
   * This is a built-in middleware function in Express. It parses 
   * incoming requests with Buffer payloads and is based on body-parser.
   * @since 4.17.0
   */
  raw: typeof raw
  /**
   * This is a built-in middleware function in Express. It parses 
   * incoming requests with text payloads and is based on body-parser.
   * @since 4.17.0
  */
  text: typeof text
  /**
   * This is a built-in middleware function in Express. It parses 
   * incoming requests with JSON payloads and is based on body-parser.
   * @since 4.16.0
  */
  json: typeof json
  /**
   * This is a built-in middleware function in Express. 
   * It serves static files and is based on serve-static.
  */
  static: serveStatic.RequestHandlerConstructor<Response>
  /**
   * This is a built-in middleware function in Express. It parses 
   * incoming requests with urlencoded payloads and is based on body-parser.
   * @since 4.16.0
  */
  urlencoded: typeof urlencoded
  /**
   * These are the exposed prototypes.
  */
  request: Request
  response: Response
  application: Application
   
  /**
   * This is a built-in middleware function in Express. 
   * It parses incoming request query parameters.
  */ 
  query: Query
  Router: RouterFactory
}


export default express