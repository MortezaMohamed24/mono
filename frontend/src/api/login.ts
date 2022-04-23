import fetch from "/util/fetch";
import {LOGIN_URL} from "./url";


export type RequestQuery = {
  username: string;
  password: string;
}


export const ERRORS = Object.freeze({
  BODY_ERROR: fetch.BODY_ERROR,
  CONNECTION_ERROR: fetch.CONNECTION_ERROR,
  UNAUTHORIZED_ERROR: Symbol("UNAUTHORIZED_ERROR"),
  WRONG_USERNAME_ERROR: Symbol("WRONG_USERNAME_ERROR"),
  WRONG_PASSWORD_ERROR: Symbol("WRONG_PASSWORD_ERROR"),
  INTERNAL_SERVER_ERROR: Symbol("INTERNAL_SERVER_ERROR"),
});


const WRONG_USERNAME_MESSAGE = "auth: wrong username";
const WRONG_PASSWORD_MESSAGE = "auth: wrong password";


export async function login(query: RequestQuery) {
  const url = new URL(LOGIN_URL);

  url.searchParams.set("username", query.username);
  url.searchParams.set("password", query.password);

  const req = new Request(url.href, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
  });

  const {ok, status, body} = await fetch(req, {body: true});
  
  if (ok) {
    return;
  } 

  switch (status) {
    case 500: throw ERRORS.INTERNAL_SERVER_ERROR;
    case 400:
      switch (body) {
        case WRONG_USERNAME_MESSAGE: throw ERRORS.WRONG_USERNAME_ERROR;
        case WRONG_PASSWORD_MESSAGE: throw ERRORS.WRONG_PASSWORD_ERROR;
      }
  }

  throw ERRORS.UNAUTHORIZED_ERROR;
};


export default login;