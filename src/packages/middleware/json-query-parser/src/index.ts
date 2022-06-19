import {URL} from "node:url"
import {INVALID} from "format"
import {Request} from "express"
import {Response} from "express"
import {ServerError} from "server-error"


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
const JSONQueryParser = <TQuery>(format: Format<TQuery>, error: string) => {
  return (inbound: Request, outbound: Response, proceed: Function) => {
    try {
      let query: string

      query = new URL(inbound.url, `http://${inbound.headers.host}`).search
      query = query.slice(1)    // remove the "?" that precedes each search query
      query = decodeURI(query)  // if `search` has any URL-specific escapes, convert them to normal characters
      query = JSON.parse(query)

      const output = format(query)
      
      if (output === INVALID) {
        throw "error"
      }
  
      inbound.query = output as any

      proceed()
    } 
    
    catch {
      throw new ServerError({
        status: 400, 
        message: error,
      })
    }
  }
}


export default JSONQueryParser