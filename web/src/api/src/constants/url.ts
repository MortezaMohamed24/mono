import {ORIGIN} from "./server"


export const LOGIN = `${ORIGIN}/auth/login`
export const SIGNUP = `${origin}/api/users/create`
export const LOGIN_STATUS = `${ORIGIN}/auth/status`


export default Object.freeze({
  LOGIN,
  SIGNUP,
  LOGIN_STATUS,
}) 