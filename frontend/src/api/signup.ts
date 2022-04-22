import fetch from "../util/fetch";
import {SIGNUP_URL} from "./url";


export interface RequestBody {
  username: string;
  password: string;
  lastname: string;
  firstname: string;
}


export const INVALID_USERNAME_MESSAGE = "user: invalid username";
export const INVALID_PASSWORD_MESSAGE = "user: invalid password";
export const INVALID_LASTNAME_MESSAGE = "user: invalid last name";
export const INVALID_FIRSTNAME_MESSAGE = "user: invalid first name";
export const UNAVAILABLE_USERNAME_MESSAGE = "user: unavailable username";
 
export const UNAUTHORIZED_ERROR = Symbol("UNAUTHORIZED_ERROR");
export const INTERNAL_SERVER_ERROR = Symbol("INTERNAL_SERVER_ERROR");
export const INVALID_USERNAME_ERROR = Symbol("INVALID_USERNAME_ERROR");
export const INVALID_PASSWORD_ERROR = Symbol("INVALID_PASSWORD_ERROR");
export const INVALID_LASTNAME_ERROR = Symbol("INVALID_LASTNAME_ERROR");
export const INVALID_FIRSTNAME_ERROR = Symbol("INVALID_FIRSTNAME_ERROR");
export const UNAVAILABLE_USERNAME_ERROR = Symbol("UNAVAILABLE_USERNAME_ERROR");


export const signup = (body: RequestBody) => (
  fetch({
    url: SIGNUP_URL,
    body: body,
    method: "POST",
    headers: {"Content-Type": "application/json"},
    validateStatus({ok, body, status}) {
      if (ok) { return; }
  
      if (status === 400) {
        switch (body) {
          case INVALID_USERNAME_MESSAGE: throw INVALID_USERNAME_ERROR;
          case INVALID_PASSWORD_MESSAGE: throw INVALID_PASSWORD_ERROR;
          case INVALID_LASTNAME_MESSAGE: throw INVALID_LASTNAME_ERROR;
          case INVALID_FIRSTNAME_MESSAGE: throw INVALID_FIRSTNAME_ERROR;
          case UNAVAILABLE_USERNAME_MESSAGE: throw UNAVAILABLE_USERNAME_ERROR;
        }
      }
      
      if (status === 500) {
        throw INTERNAL_SERVER_ERROR;
      }
  
      throw UNAUTHORIZED_ERROR;
    }
  })
);


signup.UNAUTHORIZED_ERROR = UNAUTHORIZED_ERROR;
signup.INTERNAL_SERVER_ERROR = INTERNAL_SERVER_ERROR;
signup.INVALID_USERNAME_ERROR = INVALID_USERNAME_ERROR;
signup.INVALID_PASSWORD_ERROR = INVALID_PASSWORD_ERROR;
signup.INVALID_LASTNAME_ERROR = INVALID_LASTNAME_ERROR;
signup.INVALID_FIRSTNAME_ERROR = INVALID_FIRSTNAME_ERROR;
signup.UNAVAILABLE_USERNAME_ERROR = UNAVAILABLE_USERNAME_ERROR;


export default signup;