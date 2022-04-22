import fetch from "../util/fetch";
import {LOGIN_URL} from "./url";


export type RequestQuery = {
  username: string;
  password: string;
}


export const UNAUTHORIZED_ERROR = Symbol("UNAUTHORIZED_ERROR");
export const WRONG_USERNAME_ERROR = Symbol("WRONG_USERNAME_ERROR");
export const WRONG_PASSWORD_ERROR = Symbol("WRONG_PASSWORD_ERROR");
export const INTERNAL_SERVER_ERROR = Symbol("INTERNAL_SERVER_ERROR");
export const WRONG_USERNAME_MESSAGE = "auth: wrong username";
export const WRONG_PASSWORD_MESSAGE = "auth: wrong password";


export function login(query: RequestQuery) {
  return fetch({
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
  });
}


login.UNAUTHORIZED_ERROR = UNAUTHORIZED_ERROR;
login.WRONG_USERNAME_ERROR = WRONG_USERNAME_ERROR;
login.WRONG_PASSWORD_ERROR = WRONG_PASSWORD_ERROR;
login.INTERNAL_SERVER_ERROR = INTERNAL_SERVER_ERROR;


export default login;