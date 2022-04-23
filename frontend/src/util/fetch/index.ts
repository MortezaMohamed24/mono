import {O} from "ts-toolbelt";


type Output = {
  ok: boolean;
  url: string;    
  type: ResponseType;
  body: string;
  status: number;
  headers: Headers;
  redirected: boolean;
  statusText: string;
}

type Configs = {
  body?: boolean;
}

type Options<TConfigs extends Configs> = TConfigs & {
  timeout?: number;
}

type ReturnType<TConfigs extends Configs> = 
  TConfigs extends {body: true}
    ? Output
    : O.Overwrite<Output, {body: undefined}>


const NativeFetch = window.fetch;
const aborter = new AbortController();
const signal = aborter.signal;
const abort = () => aborter.abort();


/** Response body is missing when it's required or body is not valid JSON */
const BODY_ERROR = Symbol();
/** Client is offline or server is shutdown */
const CONNECTION_ERROR = Symbol();


async function fetch<TConfigs extends Configs>(req: Request, options?: Options<TConfigs>): Promise<ReturnType<TConfigs>> {  
  const timeout = options?.timeout ?? 0;
  const includeBody = options?.body ?? false;

  let response: Response;
  
  setTimeout(abort, timeout);

  try { 
    response = await NativeFetch(req, {signal}); 
  } catch { 
    throw CONNECTION_ERROR; 
  }
  
  const output: Partial<Output> = {};

  output.ok = response.ok;
  output.url = response.url;
  output.type = response.type;
  output.status = response.status;
  output.headers = response.headers;
  output.redirected = response.redirected;
  output.statusText = response.statusText;

  if (includeBody) {
    try {
      output.body = await response.json();
    } catch {
      throw BODY_ERROR;
    }
  }

  return output as ReturnType<TConfigs>;
}


fetch.BODY_ERROR = BODY_ERROR;
fetch.CONNECTION_ERROR = CONNECTION_ERROR;


export default fetch;