import {URL} from "node:url"


export type Result<TUser> = (
  | PassResult
  | FailResult
  | SuccessResult<TUser>
  | RedirectResult  
)


export interface PassResult {
  type: "pass"
}

export interface FailResult {
  type: "fail"
  status: number | undefined
  message: string | undefined
  challenge: string | undefined
}

export interface SuccessResult<TUser> {
  type: "success"
  user: TUser
}

export interface RedirectResult {
  url: URL | string
  type: "redirect"
  status: number | undefined
}


export function pass(): PassResult {
  return {
    type: "pass",
  }
}

export function fail({status, message, challenge}: Omit<Partial<FailResult>, "type">): FailResult {
  return {
    type: "fail",
    status: status,
    message: message,
    challenge: challenge,
  }
}

export function success<TUser>(user: TUser): SuccessResult<TUser> {
  return {
    type: "success",
    user: user,
  }
}

export function redirect(url: string, status?: number | undefined): RedirectResult {
  return {
    url: url,
    type: "redirect",
    status: status,
  }
}


export default Object.freeze({
  pass, 
  fail,
  success,
  redirect,
})