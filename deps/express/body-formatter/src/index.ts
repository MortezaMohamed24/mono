import {Request} from "express"
import {INVALID} from "format"
import {Response} from "express"
import {ServerError} from "errors"


interface Options<TBody> {
  error: string
  format: Format<TBody>
}

interface Format<TBody> {
  (rawBody: unknown): (
    | TBody
    | INVALID
  )
}


/** 
 * Creates a middleware that format the inbound body using `format`.
 * If `format` returns `INVALID` for it, a `ServerError` whose status is
 * `400 (Bad Request)` and whose message is `error` will be thrown,
 * else, the formatted body will be assigned to `inbound.body` (overwrite the origianl body)
*/
const BodyFormatter = <TBody>({error, format}: Options<TBody>) => (
  (inbound: Request, outbound: Response, proceed: Function) => {
    const output = format(inbound.body)
    
    if (output === INVALID) {
      throw new ServerError({
        status: 400, 
        message: error,
      })
    }
    
    inbound.body = output as TBody

    proceed()
  }
)


export {BodyFormatter}
export default BodyFormatter