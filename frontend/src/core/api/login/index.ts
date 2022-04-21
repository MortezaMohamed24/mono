import fetch from "../fetch/fetch";
import {LOGIN_URL} from "../url";
import {UNAUTHORIZED_ERROR} from "../fetch/errors";
import {INTERNAL_SERVER_ERROR} from "../fetch/errors";


export type RequestQuery = {
  username: string;
  password: string;
}


export const WRONG_USERNAME_ERROR = Symbol("WRONG_USERNAME_ERROR");
export const WRONG_PASSWORD_ERROR = Symbol("WRONG_PASSWORD_ERROR");
export const WRONG_USERNAME_MESSAGE = "auth: wrong username";
export const WRONG_PASSWORD_MESSAGE = "auth: wrong password";


export const login = (query: RequestQuery) => (
  fetch({
    url: LOGIN_URL,
    query: query,
    method: "POST",
    headers: {"Content-Type": "application/json"},
    validateStatus({ok, body, status}) {
      if (ok) {
        return;
      } 
      
      if (status === 400) {
        switch (body) {
          case WRONG_USERNAME_MESSAGE: throw WRONG_USERNAME_ERROR;
          case WRONG_PASSWORD_MESSAGE: throw WRONG_PASSWORD_ERROR;
        }
      }
  
      if (status === 500) {
        throw INTERNAL_SERVER_ERROR;
      }
  
      throw UNAUTHORIZED_ERROR;
    },
  })
);


export default login;