import {URL} from "node:url"


export type AnyAuthStatus<TUser> = (
  | PassAuthStatus
  | FailAuthStatus
  | SuccessAuthStatus<TUser>
  | RedirectAuthStatus  
)


export interface PassAuthStatus {
  type: "pass"
}

export interface FailAuthStatus {
  type: "fail"
  status: number | undefined
  message: string | undefined
  challenge: string | undefined
}

export interface SuccessAuthStatus<TUser> {
  type: "success"
  user: TUser
}

export interface RedirectAuthStatus {
  url: URL | string
  type: "redirect"
  status: number | undefined
}


export function pass(): PassAuthStatus {
  return {
    type: "pass",
  }
}

export function fail({status, message, challenge}: Omit<Partial<FailAuthStatus>, "type">): FailAuthStatus {
  return {
    type: "fail",
    status: status,
    message: message,
    challenge: challenge,
  }
}

export function success<TUser>(user: TUser): SuccessAuthStatus<TUser> {
  return {
    type: "success",
    user: user,
  }
}

export function redirect(url: string, status?: number | undefined): RedirectAuthStatus {
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