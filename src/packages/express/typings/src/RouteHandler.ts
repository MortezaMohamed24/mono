import {Step} from "./Customize.js"
import {Middleware} from "./Middleware.js"


export interface IRouterHandler<TReturn> {
  <TStep extends Step>(...handlers: Middleware<TStep>[]): TReturn
}