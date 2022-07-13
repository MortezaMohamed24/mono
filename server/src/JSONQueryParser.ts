import {URL} from "node:url"
import {Error} from "./Error.js"
import {INVALID} from "format"
import {FormatError} from "format"


type Format<TQuery> = {
  (rawQuery: unknown): (
    | INVALID
    | TQuery
  )
}

/** 
 * Creates a middleware that parses request query as JSON than formats it
 * using `format`. If the query is not valid JSON or if `format` returns 
 * `INVALID` for it, a `ServerError` whose status is `400 (Bad Request)` and 
 * whose message is `error` will be thrown.
*/
const JSONQueryParser = <TQuery>(format: Format<TQuery>) => (
  (request, response, proceed) => {
    try {
      let query: string

      query = new URL(request.url, `http://${request.headers.host}`).search
      query = query.slice(1)    // remove the "?" that precedes each search query
      query = decodeURI(query)  // if `search` has any URL-specific escapes, convert them to normal characters
      query = JSON.parse(query)

      const output = format(query)
      
      if (output === INVALID) {
        throw "error"
      }
  
      request.query = output as any

      proceed()
    } 
    
    catch (e) {
      if (e instanceof FormatError) {
        throw new Error(400, e.violation)
      } else {
        throw new Error(500, "Internal Server Error")
      }
    }
  }
)


export {JSONQueryParser}
export default JSONQueryParser