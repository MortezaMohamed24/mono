import {Step} from "./Customize.js"
import {Path} from "./RouteParameter.js"
import {Middleware} from "./Middleware.js"
import {Application} from "./Application.js"


export interface RouterMatcher<TThis, TStep extends Step> {
  (...rest: [Path, ...Middleware<TStep>[]] | [Path, Application]): TThis
}