import app from "./app.js"
import {ServerError} from "errors"
import {STATUS_CODES} from "node:http"


/**
 * meant to handle all express errors.
 */
app.use("/", (error, request, response, proceed) => {
  if ((
    error instanceof ServerError 
  ) && (
    [400, 401, 404].includes(error.status)
  )) {
    response.status(error.status).send(error.message)
  } else {
    response.status(500).send(STATUS_CODES[500])
  }
  
  console.log(error)
})