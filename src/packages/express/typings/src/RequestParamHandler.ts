import {Step} from "./Customize.js"
import {Proceed} from "./Proceed.js"


export type RequestParamHandler<TStep extends Step> = {
  (
    request: TStep[0][0], 
    response: TStep[1][0], 
    proceed: Proceed, 
    value: any, 
    name: string,
  ): unknown
}