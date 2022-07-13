import fetch from "/util/fetch"
import {SIGNUP_URL} from "./url"


export interface RequestBody {
  username: string
  password: string
  lastname: string
  firstname: string
}

export const AUTH_UNKNOWN_USER_MESSAGE = "AUTH: UNKNOWN_USER"
export const AUTH_BAD_USERNAME_MESSAGE = "AUTH: BAD_USERNAME"
export const AUTH_BAD_PASSWORD_MESSAGE = "AUTH: BAD_PASSWORD"
export const AUTH_MISSING_USERNAME_MESSAGE = "AUTH: MISSING_USERNAME"
export const AUTH_MISSING_PASSWORD_MESSAGE = "AUTH: MISSING_PASSWORD"
export const AUTH_INCORRECT_PASSWORD_MESSAGE = "AUTH: INCORRECT_PASSWORD"
export const AUTH_MISSING_CREDINTAILS_MESSAGE = "AUTH: MISSING_CREDINTAILS"

export const BODY_ERROR = fetch.BODY_ERROR
export const CONNECTION_ERROR = fetch.CONNECTION_ERROR
export const UNRECOGNIZED_ERROR = Symbol("UNRECOGNIZED_ERROR")
export const INTERNAL_SERVER_ERROR = Symbol("INTERNAL_SERVER_ERROR")
export const AUTH_UNKNOWN_USER_ERROR = Symbol("AUTH::UNKNOWN_USER")
export const AUTH_BAD_USERNAME_ERROR = Symbol("AUTH::BAD_USERNAME")
export const AUTH_BAD_PASSWORD_ERROR = Symbol("AUTH::BAD_PASSWORD")
export const AUTH_MISSING_USERNAME_ERROR = Symbol("AUTH::MISSING_USERNAME")
export const AUTH_MISSING_PASSWORD_ERROR = Symbol("AUTH::MISSING_PASSWORD")
export const AUTH_INCORRECT_PASSWORD_ERROR = Symbol("AUTH::INCORRECT_PASSWORD")
export const AUTH_MISSING_CREDINTAILS_ERROR = Symbol("AUTH::MISSING_CREDINTAILS")

export const ERRORS = Object.freeze({
  BODY_ERROR,
  CONNECTION_ERROR,
  UNRECOGNIZED_ERROR,
  INTERNAL_SERVER_ERROR,
  AUTH_UNKNOWN_USER_ERROR,
  AUTH_BAD_USERNAME_ERROR,
  AUTH_BAD_PASSWORD_ERROR,
  AUTH_MISSING_USERNAME_ERROR,
  AUTH_MISSING_PASSWORD_ERROR,
  AUTH_INCORRECT_PASSWORD_ERROR,
  AUTH_MISSING_CREDINTAILS_ERROR,
})

export const MESSAGES = Object.freeze({
  AUTH_UNKNOWN_USER_MESSAGE,
  AUTH_BAD_USERNAME_MESSAGE,
  AUTH_BAD_PASSWORD_MESSAGE,
  AUTH_MISSING_USERNAME_MESSAGE,
  AUTH_MISSING_PASSWORD_MESSAGE,
  AUTH_INCORRECT_PASSWORD_MESSAGE,
  AUTH_MISSING_CREDINTAILS_MESSAGE,
})

export async function signup(requestBody: RequestBody) {
  const req = new Request(SIGNUP_URL, {
    body: JSON.stringify(requestBody),
    method: "POST",
    headers: {"Content-Type": "application/json"},
  })

  const {
    ok, 
    body, 
    status,
  } = await fetch(req, {body: "text"})

  if (ok) { return }

  if (status === 400) {
    switch (body) {
      case AUTH_UNKNOWN_USER_MESSAGE: throw ERRORS.AUTH_UNKNOWN_USER_ERROR
      case AUTH_BAD_USERNAME_MESSAGE: throw ERRORS.AUTH_BAD_USERNAME_ERROR
      case AUTH_BAD_PASSWORD_MESSAGE: throw ERRORS.AUTH_BAD_PASSWORD_ERROR
      case AUTH_MISSING_USERNAME_MESSAGE: throw ERRORS.AUTH_MISSING_USERNAME_ERROR
      case AUTH_MISSING_PASSWORD_MESSAGE: throw ERRORS.AUTH_MISSING_PASSWORD_ERROR
      case AUTH_INCORRECT_PASSWORD_MESSAGE: throw ERRORS.AUTH_INCORRECT_PASSWORD_ERROR
      case AUTH_MISSING_CREDINTAILS_MESSAGE: throw ERRORS.AUTH_MISSING_CREDINTAILS_ERROR
    }
  }
  
  if (status === 500) {
    throw ERRORS.INTERNAL_SERVER_ERROR
  }

  throw ERRORS.UNRECOGNIZED_ERROR
}


export default signup