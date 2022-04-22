type Configs = {
  /** Request method */
  method?: "GET" | "HEAD" | "POST" | "PATCH" | "DELETE";
  /** 
   * Recives the `JSON.parse()`ed response body and returns it formatted.
   * 
   * If the response body is invalid, this function should throw an error.
   * 
   * The `fetch()` return value type will be this function's return type, or undefined if this 
   * function is not supplied. 
  */
  formatResponseBody?: (body: unknown) => unknown;
}

type Options<TConfigs extends Configs> = TConfigs & {
  /** URL to fetch */
  url: string | URL;
  /** The connection timeout. Defaults to `0`. */
  timeout?: number;
  /** Request Headers */
  headers?: undefined | HeadersInit; 
  /** Request body */
  reqBody?: TConfigs["method"] extends "GET" | "HEAD" ? undefined : undefined | unknown;
  /** Request Query */
  reqQuery?: undefined | Record<string, unknown>;
  /** Response status validator. If status is invalid, it should throw an error. */
  validateStatus?: (arg: ValidateStatusArgument) => void;
}

type ValidateStatusArgument = {
  ok: boolean;
  body: unknown;
  status: number;
  statusText: string;
}

type Return<TConfigs extends Configs> = 
  TConfigs["formatResponseBody"] extends Function
    ? ReturnType<TConfigs["formatResponseBody"]>
    : undefined


const aborter = new AbortController();
const signal = aborter.signal;
const abort = () => aborter.abort();


/** Response body is missing when it's required or body is not valid JSON */
export const BODY_ERROR = Symbol();
/** Client is offline or server is shutdown */
export const CONNECTION_ERROR = Symbol();


export async function fetch<TConfigs extends Configs>(options: Options<TConfigs>): Promise<Return<TConfigs>> {  
  const {
    method, 
    headers, 
    timeout = 0,
    reqBody, 
    reqQuery, 
    validateStatus,
    formatResponseBody,
  } = options;
  
  const url = options.url instanceof URL 
    ? new URL(options.url.href) 
    : new URL(options.url);

  if (reqQuery) {
    for (let key in reqQuery) {
      url.searchParams.set(key, JSON.stringify(reqQuery[key]));
    }
  }

  const init: RequestInit = {};

  init.method = method || "GET";
  init.headers = headers || {};

  if (reqBody !== undefined) {
    init.body = JSON.stringify(reqBody);
  }

  let req;
  let res: Response;
  
  req = new Request(url.href, init);

  setTimeout(abort, timeout);

  try { 
    res = await window.fetch(req, {signal}); 
  } catch { 
    throw CONNECTION_ERROR; 
  }
  
  let body: unknown;

  try {
    body = await res.json();
  } catch {
    throw BODY_ERROR;
  }

  validateStatus?.({
    ok: res.ok,
    body: body,
    status: res.status,
    statusText: res.statusText,
  });

  if (formatResponseBody) {
    return formatResponseBody(body) as Return<TConfigs>;
  } else {
    return undefined as any as Return<TConfigs>;
  }
}


fetch.BODY_ERROR = BODY_ERROR;
fetch.CONNECTION_ERROR = CONNECTION_ERROR;


export default fetch;