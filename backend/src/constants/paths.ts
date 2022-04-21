import {URL} from "url";
import {ORIGIN} from "./origin.js";


export const CARD = new URL("/card", ORIGIN);
export const BOARD = new URL("/board", ORIGIN);
export const LOGIN = new URL("/login", ORIGIN);
export const SIGNUP = new URL("/signup", ORIGIN);
export const LOGIN_ERROR = new URL("/login/error", ORIGIN);
export const SIGNUP_ERROR = new URL("/signup/error", ORIGIN);


export default Object.freeze({
  CARD,
  BOARD,
  LOGIN,
  SIGNUP,
  LOGIN_ERROR,
  SIGNUP_ERROR,
});