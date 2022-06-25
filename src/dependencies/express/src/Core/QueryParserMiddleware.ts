import {Step} from "./Customize.js"
import {ParsedQs} from "../QueryString/index.js"
import {Customize} from "./Customize.js"
import {Middleware} from "./Middleware.js"


export type QueryParserMiddleware = (
  Middleware<Customize<Step, [{
    query: ParsedQs
  }, {
    
  }]>>
)


export default QueryParserMiddleware