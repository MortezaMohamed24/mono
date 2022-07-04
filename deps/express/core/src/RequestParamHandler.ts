import {Stop0} from "./Customize.js"
import {Proceed} from "./Proceed.js"


export type RequestParamHandler<TStop extends Stop0> = {
  (
    request: TStop[0][0], 
    response: TStop[1][0], 
    proceed: Proceed, 
    value: any, 
    name: string,
  ): unknown
}