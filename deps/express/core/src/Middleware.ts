import {Stop} from "./Customize.js"
import {Proceed} from "./Proceed.js"


export type Middleware<TStep extends Stop> = {
  (
    request: TStep[0][0],
    response: TStep[1][0],
    proceed: Proceed,
  ): void
}

export type AnyMiddleware<TStep extends Stop> = {
  (
    request: TStep[0][0],
    response: TStep[1][0],
    proceed: Proceed,
  ): void
  
  (
    error: unknown,
    request: TStep[0][0],
    response: TStep[1][0],
    proceed: Proceed,
  ): void
}

export type ErrorMiddleware<TStep extends Stop> = {
  (
    error: unknown,
    request: TStep[0][0],
    response: TStep[1][0],
    proceed: Proceed,
  ): void
}


export default AnyMiddleware