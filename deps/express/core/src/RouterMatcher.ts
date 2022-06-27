import {Stop} from "./Customize.js"
import {Path} from "./RouteParameter.js"
import {Middleware} from "./Middleware.js"
import {Application} from "./Application.js"


export interface RouterMatcher<TThis, TStop extends Stop> {
  (...rest: [Path, ...Middleware<TStop>[]] | [Path, Application]): TThis
}