import {abort} from "./controller";
import {signal} from "./controller";
import {BODY_IS_NOT_JSON} from "./errors";
import {CLIENT_IS_OFFLINE} from "./errors";
import {COULD_NOT_READ_BODY} from "./errors";
import {SERVER_IS_UNREACHABLE} from "./errors";


function fetch({
  url: unnormalizedUrl,
  body: requestBody,
  query: requestQuery,
  method: requestMethod,
  headers: requestHeaders,
  timeOut: requestTimeOut,
  validateStatus: validateStatus,
  formatResponseBody: formatResponseBody,
}) {  
  const url = url instanceof URL 
    ? new URL(unnormalizedUrl.href) 
    : new URL(unnormalizedUrl);

  if (requestQuery) {
    for (let key in requestQuery) {
      url.searchParams.set(key, JSON.stringify(requestQuery[key]));
    }
  }

  const request = new Request(url.href, {
    body: requestBody ? requestBody : undefined,
    method: requestMethod,
    headers: requestHeaders,
  });

  if (!navigator.onLine) {
    throw CLIENT_IS_OFFLINE;
  }

  setTimeout(abort, requestTimeOut);
  
  try { 
    response = await window.fetch(request, {signal}); 
  } catch { 
    throw SERVER_IS_UNREACHABLE; 
  }
  
  try {
    body = await response.body();
  } catch {
    throw COULD_NOT_READ_BODY;
  }

  try {
    body = JSON.stringify(body);
  } catch {
    throw BODY_IS_NOT_JSON;
  }

  validateStatus?.({
    ok: response.ok,
    body: body,
    status: response.status,
    statusText: response.statusText,
  });

  if (formatResponseBody) {
    return formatResponseBody(body);
  } else {
    return undefined;
  }
}


export default fetch;