import {O} from "ts-toolbelt"
import {ApiBodyError} from "../errors.js"
import {ApiConnectionError} from "../errors.js"


type Output = {
  ok: boolean
  url: string    
  type: ResponseType
  body: string
  status: number
  headers: Headers
  redirected: boolean
  statusText: string
}

type Configs = {
  body?: "text" | "json"
}

type Options<TConfigs extends Configs> = TConfigs & {
  timeout?: number
}

type ReturnType<TConfigs extends Configs> = 
  TConfigs extends {body: true}
    ? Output
    : TConfigs extends {body: "text"}
      ? O.Overwrite<Output, {body: string}>
      : TConfigs extends {body: "json"}
        ? O.Overwrite<Output, {body: unknown}>
          : O.Overwrite<Output, {body: undefined}>


async function fetch<TConfigs extends Configs>(request: Request, options?: Options<TConfigs>): Promise<ReturnType<TConfigs>> {  
  const bodyType = options?.body
  const timeout = options?.timeout ?? 3000
  const aborter = new AbortController()
  const signal = aborter.signal
  const abort = () => aborter.abort()

  let response: Response
  let timeoutCode: number
  
  try { 
    timeoutCode = setTimeout(abort, timeout)
    response = await window.fetch(request, {signal}) 
    clearTimeout(timeoutCode)
  } catch (e) { 
    throw new ApiConnectionError() 
  }

  const output: Partial<Output> = {}

  output.ok = response.ok
  output.url = response.url
  output.type = response.type
  output.status = response.status
  output.headers = response.headers
  output.redirected = response.redirected
  output.statusText = response.statusText

  if (bodyType) {
    try {
      output.body = await response[bodyType]() 
    } catch {
      throw new ApiBodyError()
    }
  }

  return output as ReturnType<TConfigs>
}



export default fetch