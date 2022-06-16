export type AnyAuthStatus = (
  | PassAuthStatus
  | FailAuthStatus
  | SuccessAuthStatus
  | RedirectAuthStatus  
)


export interface PassAuthStatus {
  type: "pass"
}

export interface FailAuthStatus {
  type: "fail"
  status: number | undefined
  challenge: string
}

export interface SuccessAuthStatus {
  type: "success"
  user: Authenticator.User
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

export function fail({status, challenge}: {status?: number | undefined, challenge: string}): FailAuthStatus {
  return {
    type: "fail",
    status: status,
    challenge: challenge,
  }
}

export function success(user: Authenticator.User): SuccessAuthStatus {
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