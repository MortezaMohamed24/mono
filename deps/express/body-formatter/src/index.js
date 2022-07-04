import {Request} from "express"
import {INVALID} from "format"
import {Response} from "express"
import {ServerError} from "errors"
import {Cu} from "express"


// interface Options<TBody> {
//   error: string
//   format: Format<TBody>
// }

// interface Format<TBody> {
//   (rawBody: unknown): (
//     | TBody
//     | INVALID
//   )
// }

// type Expectation = (
// ""
// )

/** 
 * Creates a middleware that format the inbound body using `format`.
 * If `format` returns `INVALID` for it, a `ServerError` whose status is
 * `400 (Bad Request)` and whose message is `error` will be thrown,
 * else, the formatted body will be assigned to `inbound.body` (overwrite the origianl body)
*/
function Payload(format) {
  return (request, response, proceed) => {
    const output = format(request.body)
    
    if (output === INVALID) {
      throw new ServerError({
        status: 400, 
        message: error,
      })
    }
    
    request.payload =
    proceed()
  }
}


export {Payload as BodyFormatter}
export default Payload