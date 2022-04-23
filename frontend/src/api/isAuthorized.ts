import fetch from "/util/fetch";
import {BOOLEAN} from "/util/formatter";
import {LOGIN_STATUS_URL} from "./url";


const format = BOOLEAN({
  name: "isAuthorized",
  strict: true,
});


const BODY_ERROR = fetch.BODY_ERROR;
const CONNECTION_ERROR = fetch.CONNECTION_ERROR;
const UNAUTHORIZED_ERROR = Symbol("UNAUTHORIZED_ERROR");
const UNRECOGNIZED_ERROR = Symbol("UNRECOGNIZED_ERROR");


const isAuthorized = async () => {
  const req = new Request(LOGIN_STATUS_URL, {
    method: "GET",
    headers: {"Content-Type": "application/json"},
  });

  const {ok, body, status} = await fetch(req, {body: true});

  if (ok) {
    return format(body);
  }

  if (status === 401) {
    throw isAuthorized.UNAUTHORIZED_ERROR;
  }

  throw isAuthorized.UNAUTHORIZED_ERROR;
};


isAuthorized.BODY_ERROR = BODY_ERROR;
isAuthorized.CONNECTION_ERROR = CONNECTION_ERROR;
isAuthorized.UNAUTHORIZED_ERROR = UNAUTHORIZED_ERROR;
isAuthorized.UNRECOGNIZED_ERROR = UNRECOGNIZED_ERROR;


export default isAuthorized;