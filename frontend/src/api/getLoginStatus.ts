import fetch from "./fetch";
import {OBJECT} from "/util/formatter";
import {BOOLEAN} from "/util/formatter";
import {BODY_ERROR} from "./fetch";
import {CONNECTION_ERROR} from "./fetch";
import {LOGIN_STATUS_URL} from "./url";


const formatResponseBody = OBJECT({isLoggedIn: BOOLEAN()}, {
  name: "LogginStatus",
  strict: true,
});

const getLogginStatus = () => (
  fetch({
    url: LOGIN_STATUS_URL,
    method: "GET",
    headers: {"Content-Type": "application/json"},
    formatResponseBody: formatResponseBody,
  })
);

getLogginStatus.BODY_ERROR = BODY_ERROR;
getLogginStatus.CONNECTION_ERROR = CONNECTION_ERROR;


export default getLogginStatus;