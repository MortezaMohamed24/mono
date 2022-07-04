import {Path} from "./RouteParameter.js"
import {Stop0} from "./Customize.js"
import {Middleware} from "./Middleware.js"
import {Application} from "./Application.js"


export interface RouterMatcher<TThis, TStop extends Stop0> {
  (...rest: [Path, ...Middleware<TStop>[]] | [Path, Application]): TThis
}