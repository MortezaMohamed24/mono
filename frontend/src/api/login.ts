import fetch from "/util/fetch";
import {LOGIN_URL} from "./url";


export type RequestQuery = {
  username: string;
  password: string;
}

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
    case 500: throw login.INTERNAL_SERVER_ERROR;
    case 400:
      switch (body) {
        case WRONG_USERNAME_MESSAGE: throw login.WRONG_USERNAME_ERROR;
        case WRONG_PASSWORD_MESSAGE: throw login.WRONG_PASSWORD_ERROR;
      }
  }

  throw login.UNAUTHORIZED_ERROR;
}

login.BODY_ERROR = fetch.BODY_ERROR;
login.CONNECTION_ERROR = fetch.CONNECTION_ERROR;
login.UNAUTHORIZED_ERROR = Symbol("UNAUTHORIZED_ERROR");
login.WRONG_USERNAME_ERROR = Symbol("WRONG_USERNAME_ERROR");
login.WRONG_PASSWORD_ERROR = Symbol("WRONG_PASSWORD_ERROR");
login.INTERNAL_SERVER_ERROR = Symbol("INTERNAL_SERVER_ERROR");


export default login;