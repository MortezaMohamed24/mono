import fetch from "../fetch/fetch";
import {OBJECT} from "/util/formatter";
import {BOOLEAN} from "/util/formatter";
import {LOGIN_STATUS_URL} from "/core/api/url";


const formatterOfIsLoggedIn = BOOLEAN({
  name: "LogginStatus/isLogged",
  strict: true,
});

const formatterOfLogginStatus = OBJECT({
  name: "LogginStatus",
  strict: true,
  content: {isLoggedIn: formatterOfIsLoggedIn},
});

const getLogginStatus = () => (
  fetch({
    url: LOGIN_STATUS_URL,
    method: "GET",
    headers: {"Content-Type": "application/json"},
    formatResponseBody: formatterOfLogginStatus,
  })
);


export default getLogginStatus;