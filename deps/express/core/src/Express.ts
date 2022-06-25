import * as RESPONSE from "./Response.js"
import * as bodyParser from "body-parser"
import * as serveStatic from "serve-static"
import * as APPLICATION from "./Application.js"
import {Query} from "./Query.js"
import {Request} from "./Request.js"
import {Response} from "./Response.js"
import {Application} from "./Application.js"


export interface Express extends Application {
  request: Request
  response: Response
}

/**
 * Creates an Express application. The express() function is a 
 * top-level function exported by the express module.
 */
declare const express: {
  (): Express

  /**
   * This is a built-in middleware function in Express. It parses 
   * incoming requests with Buffer payloads and is based on body-parser.
   * @since 4.17.0
   */
  raw: typeof bodyParser.raw
  /**
   * This is a built-in middleware function in Express. It parses 
   * incoming requests with text payloads and is based on body-parser.
   * @since 4.17.0
  */
  text: typeof bodyParser.text
  /**
   * This is a built-in middleware function in Express. It parses 
   * incoming requests with JSON payloads and is based on body-parser.
   * @since 4.16.0
  */
  json: typeof bodyParser.json
  /**
   * This is a built-in middleware function in Express. 
   * It serves static files and is based on serve-static.
  */
  static: serveStatic.RequestHandlerConstructor<RESPONSE.Response>
  /**
   * This is a built-in middleware function in Express. It parses 
   * incoming requests with urlencoded payloads and is based on body-parser.
   * @since 4.16.0
  */
  urlencoded: typeof bodyParser.urlencoded
  /**
   * These are the exposed prototypes.
  */
  request: Request
  response: Response
  application: APPLICATION.Application
   
  /**
   * This is a built-in middleware function in Express. 
   * It parses incoming request query parameters.
  */ 
  query: Query
  Router: ""
}



export default express