import {Response} from "express"
import {ServerError} from "server-error"
import {STATUS_CODES} from "node:http"


/**
 * meant to handle all express errors.
 */
function onError(error: unknown, inbound: unknown, outbound: Response) {
  if ((
    error instanceof ServerError 
  ) && (
    [400, 401, 404].includes(error.status)
  )) {
    outbound.status(error.status).send(error.message)
  } else {
    outbound.status(500).send(STATUS_CODES[500])
  }
  
  console.log(error)
}


export default onError