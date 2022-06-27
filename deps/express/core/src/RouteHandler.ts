import {Stop} from "./Customize.js"
import {Middleware} from "./Middleware.js"


export interface IRouterHandler<TReturn> {
  <TStop extends Stop>(...handlers: Middleware<TStop>[]): TReturn
}