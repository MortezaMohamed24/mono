import fetch from "../util/fetch"
import {ORIGIN} from "../constants/server"
import {OBJECT} from "format"
import {BOOLEAN} from "format"
import {ApiUnauthorizedError} from "../errors"
import {ApiUnrecognizedError} from "../errors"


const AUTHORIZED = BOOLEAN({
  name: "isAuthorized",
})

const STATUS = OBJECT({
  authorized: AUTHORIZED,
}, {
  name: "AUTH_STATUS",
})

const URL = (
  `${ORIGIN}/auth/status`
)


async function getAuthStaus() {
  const req = new Request(URL, {
    method: "GET",
    headers: {"Content-Type": "application/json"},
  })

  const {
    ok, 
    body, 
    status,
  } = await fetch(req, {
    body: "json", 
    timeout: 7000,
  })

  if (ok) {
    return STATUS(body, {strict: true}).authorized
  }

  if (status === 401) {
    throw new ApiUnauthorizedError()
  }

  throw new ApiUnrecognizedError()
}



export default getAuthStaus