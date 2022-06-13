export interface PassFlowControl {
  type: "pass"
}

export interface FailFlowControl {
  type: "fail"
  status: number
  challengeType: string
  challengeMessage: string
}

export interface FailFlowControlInitializer {
  type: "fail"
  status: number
  challengeType: string
  challengeMessage: string
}

export interface ErrorFlowControl {
  type: "error"
  error: unknown
}

export interface ErrorFlowControlInitializer {
  error: unknown
}

export interface SuccessFlowControl {
  type: "success"
  user: unknown
  info: unknown
}

export interface SuccessFlowControlInitializer {
  user: unknown
  info: unknown
}

export interface RedirectFlowControl {
  url: URL | string
  type: "redirect"
  status: number
}

export interface RedirectFlowControlInitializer {
  url: URL | string
  type: "redirect"
  status: number
}


export function pass(): PassFlowControl {
  return {
    type: "pass",
  }
}

export function fail({status, challengeType, challengeMessage}: FailFlowControlInitializer): FailFlowControl {
  return {
    type: "fail",
    status: status,
    challengeType: challengeType,
    challengeMessage: challengeMessage,
  }
}

export function error({error}: ErrorFlowControlInitializer): ErrorFlowControl {
  return {
    type: "error", 
    error: error,
  }
}

export function success({user, info}: SuccessFlowControlInitializer): SuccessFlowControl {
  return {
    type: "success",
    user: user,
    info: info,
  }
}

export function redirect({url, status}: RedirectFlowControlInitializer): RedirectFlowControl {
  return {
    url: url,
    type: "redirect",
    status: status,
  }
}
    

export default Object.freeze({
  pass, 
  fail,
  error,
  success,
  redirect,
})