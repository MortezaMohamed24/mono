import {useSlice} from "/store";
import {Errors} from "/api/login";


declare global {
  export interface __INTERNAL_REDUX_STATE__ {
    [LOGIN_SLICE_NAME]: LoginState
  }
}

export type LoginState = {
  readonly error: null; 
  readonly status: "idle" | "loading" |  "succeeded";
  readonly username: Readonly<{value: string, isValid: boolean}>;
  readonly password: Readonly<{value: string, isValid: boolean}>;
} | {
  readonly error: Errors;
  readonly status: "failed";
  readonly username: Readonly<{value: string, isValid: boolean}>;
  readonly password: Readonly<{value: string, isValid: boolean}>;
}


export const LOGIN_SLICE_NAME = "lg";


useSlice(LOGIN_SLICE_NAME, () => ({
  error: null,
  status: "idle", 
  username: {value: "", isValid: false},
  password: {value: "", isValid: false},
}));