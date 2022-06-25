import {Parse} from "qs"
import {Expect} from "./Customize.js"
import {ParsedQs} from "qs"
import {Customize} from "./Customize.js"
import {Middleware} from "./Middleware.js"
import {ParseOptions} from "qs"


export interface Query {
  (options: ParseOptions | Parse): (QueryParserMiddleware)
}

export type Expectation = (
  Expect<{query: ParsedQs}>
)

export type Customization = (
  Customize<{query: ParsedQs}>
)

export type QueryParserMiddleware = (
  Middleware<Expectation>
)


export default Query