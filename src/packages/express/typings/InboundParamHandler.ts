import {Proceed} from "./Proceed.js"


export type InboundParamHandler = {
  (
    inbound: Request, 
    outbound: Response, 
    proceed: Proceed, 
    value: any, 
    name: string,
  ): any
}