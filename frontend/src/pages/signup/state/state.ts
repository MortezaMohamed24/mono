import {useSlice} from "/store";
import {Errors} from "/api/signup";


declare global {
  export interface __INTERNAL_REDUX_STATE__ {
    [SIGNUP_SLICE_NAME]: SignupState;
  }
}


export type SignupState = {
  readonly error: null; 
  readonly status: "idle" | "loading" | "succeeded";
  readonly validity: boolean;
  readonly username: Readonly<{value: string, isValid: boolean}>;
  readonly password: Readonly<{value: string, isValid: boolean}>;
  readonly lastname: Readonly<{value: string, isValid: boolean}>;
  readonly firstname: Readonly<{value: string, isValid: boolean}>;
} | {
  readonly error: Errors;
  readonly status: "failed";
  readonly validity: boolean;
  readonly username: Readonly<{value: string, isValid: boolean}>;
  readonly password: Readonly<{value: string, isValid: boolean}>;
  readonly lastname: Readonly<{value: string, isValid: boolean}>;
  readonly firstname: Readonly<{value: string, isValid: boolean}>;
}


export const SIGNUP_SLICE_NAME = "sp";


useSlice(SIGNUP_SLICE_NAME, (): SignupState => ({
  error: null,
  status: "idle", 
  validity: false,
  username: {value: "", isValid: false},
  password: {value: "", isValid: false},
  lastname: {value: "", isValid: false},
  firstname: {value: "", isValid: false},
}));