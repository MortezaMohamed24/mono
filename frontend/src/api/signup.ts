import fetch from "/util/fetch";
import {SIGNUP_URL} from "./url";


export interface RequestBody {
  username: string;
  password: string;
  lastname: string;
  firstname: string;
}


export const ERRORS = Object.freeze({
  BODY_ERROR: fetch.BODY_ERROR,
  CONNECTION_ERROR: fetch.CONNECTION_ERROR,
  UNRECOGNIZED_ERROR: Symbol("UNRECOGNIZED_ERROR"),
  INTERNAL_SERVER_ERROR: Symbol("INTERNAL_SERVER_ERROR"),
  INVALID_USERNAME_ERROR: Symbol("INVALID_USERNAME_ERROR"),
  INVALID_PASSWORD_ERROR: Symbol("INVALID_PASSWORD_ERROR"),
  INVALID_LASTNAME_ERROR: Symbol("INVALID_LASTNAME_ERROR"),
  INVALID_FIRSTNAME_ERROR: Symbol("INVALID_FIRSTNAME_ERROR"),
  UNAVAILABLE_USERNAME_ERROR: Symbol("UNAVAILABLE_USERNAME_ERROR"),
});


const INVALID_USERNAME_MESSAGE = "user: invalid username";
const INVALID_PASSWORD_MESSAGE = "user: invalid password";
const INVALID_LASTNAME_MESSAGE = "user: invalid last name";
const INVALID_FIRSTNAME_MESSAGE = "user: invalid first name";
const UNAVAILABLE_USERNAME_MESSAGE = "user: unavailable username";
 

export async function signup(requestBody: RequestBody) {
  const req = new Request(SIGNUP_URL, {
    body: JSON.stringify(requestBody),
    method: "POST",
    headers: {"Content-Type": "application/json"},
  });

  const {
    ok, 
    body, 
    status,
  } = await fetch(req, {body: "text"});

  if (ok) { return; }

  if (status === 400) {
    switch (body) {
      case INVALID_USERNAME_MESSAGE: throw ERRORS.INVALID_USERNAME_ERROR;
      case INVALID_PASSWORD_MESSAGE: throw ERRORS.INVALID_PASSWORD_ERROR;
      case INVALID_LASTNAME_MESSAGE: throw ERRORS.INVALID_LASTNAME_ERROR;
      case INVALID_FIRSTNAME_MESSAGE: throw ERRORS.INVALID_FIRSTNAME_ERROR;
      case UNAVAILABLE_USERNAME_MESSAGE: throw ERRORS.UNAVAILABLE_USERNAME_ERROR;
    }
  }
  
  if (status === 500) {
    throw ERRORS.INTERNAL_SERVER_ERROR;
  }

  throw ERRORS.UNRECOGNIZED_ERROR;
}



export default signup;