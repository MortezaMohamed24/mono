import {Stop0} from "./Customize.js"
import {Middleware} from "./Middleware.js"


export interface IRouterHandler<TReturn> {
  <TStop extends Stop0>(...handlers: Middleware<TStop>[]): TReturn
}