import {Stop} from "./Customize.js"
import {Router} from "./Router.js"


export interface RouterFactory {
  <TStop extends Stop>(options?: undefined | RouterOptions): Router<TStop>
}


export default RouterFactory