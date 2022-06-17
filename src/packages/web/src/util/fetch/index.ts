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
  body?: boolean | "text" | "json" | "blob" | "formData" | "arrayBuffer";
}

type Options<TConfigs extends Configs> = TConfigs & {
  timeout?: number;
}

type ReturnType<TConfigs extends Configs> = 
  TConfigs extends {body: true}
    ? Output
    : TConfigs extends {body: "text"}
      ? O.Overwrite<Output, {body: string}>
      : TConfigs extends {body: "json"}
        ? O.Overwrite<Output, {body: unknown}>
        : TConfigs extends {body: "blob"}
          ? O.Overwrite<Output, {body: Blob}>
          : TConfigs extends {body: "formData"}
            ? O.Overwrite<Output, {body: FormData}>
            : TConfigs extends {body: "arrayBuffer"}
              ? O.Overwrite<Output, {body: ArrayBuffer}>
              : O.Overwrite<Output, {body: undefined}>


const NativeFetch = window.fetch;


/** Response body is missing when it's required or body is not valid JSON */
const BODY_ERROR = Symbol("BODY_ERROR");
/** Client is offline or server is shutdown */
const CONNECTION_ERROR = Symbol("CONNECTION_ERROR");


async function fetch<TConfigs extends Configs>(req: Request, options?: Options<TConfigs>): Promise<ReturnType<TConfigs>> {  
  const aborter = new AbortController();
  const signal = aborter.signal;
  const abort = () => aborter.abort();

  const timeout = options?.timeout ?? 3000;
  const bodyType = options?.body;

  let response: Response;
  
  setTimeout(abort, timeout);

  try { 
    response = await NativeFetch(req, {signal}); 
  } catch (e) { 
    console.log({e, timeout})
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

  if (bodyType) {
    try {
      // for backward compatablity, true is just like "json"
      if (bodyType === true) {
        output.body = await response.json();
      } else {
        output.body = await response[bodyType](); 
      }
    } catch {
      throw BODY_ERROR;
    }
  }

  return output as ReturnType<TConfigs>;
}


fetch.BODY_ERROR = BODY_ERROR;
fetch.CONNECTION_ERROR = CONNECTION_ERROR;


export default fetch;