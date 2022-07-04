import {Parse} from "qs"
import {ParsedQs} from "qs"
import {Customize} from "./Customize.js"
import {Middleware} from "./Middleware.js"
import {ParseOptions} from "qs"


export interface Query {
  (options: ParseOptions | Parse): (QueryParserMiddleware)
}

export type Expectation = (
  Customize<{query: ParsedQs}, {}, false>
)

export type Customization = (
  Customize<{query: ParsedQs}, {}, true>
)

export type QueryParserMiddleware = (
  Middleware<Expectation>
)


export default Query