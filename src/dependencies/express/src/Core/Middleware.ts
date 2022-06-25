import {Step} from "./Customize.js"
import {Proceed} from "./Proceed.js"


export type Middleware<TStep extends Step> = {
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


export default Middleware