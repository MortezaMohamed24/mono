import {Middleware} from "express"
import {SessionOptions} from "./SessionOptions.js"


export declare const session: (
  SessionFactory
)

export interface SessionFactory {
  (options?: SessionOptions): Middleware
}


export default session