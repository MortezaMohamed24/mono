import {Errors} from "./errors";


async function fetch(url: URL | string | Request): Promise<Response> {
  isOnline();

  try { 
    return isOk(await window.fetch(urlify(url))); 
  } 
  
  catch (e) { 
    throw Errors.CONNECTION; 
  }
}

async function fetchJSONAs<Body>(url: URL | string | Request, format: (body: unknown) => Body) {
  try {
    return format((await fetch(url)).json());
  } catch { 
    throw Errors.BODY;
  }
}

const isOk = (response: Response) => {
  if (response.ok) {
    return response;
  } else {
    throw response.status;
  }
}

const urlify = (url: string | URL | Request) => {
  if (url instanceof URL) {
    return url.href;
  } else if (url instanceof Request) {
    return url;
  } else {
    try {
      return new URL(url).href;
    } catch {
      throw Errors.URL
    }
  } 
}

const isOnline = () => {
  if (!navigator.onLine) {
    throw Errors.OFFLINE;
  }
}


export default fetch;
export {fetch, fetchJSONAs};