import {useSlice} from "/store";


declare global {
  export interface __INTERNAL_REDUX_STATE__ {
    [NAME]: SignupState;
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
  readonly error: unknown;
  readonly status: "failed";
  readonly validity: boolean;
  readonly username: Readonly<{value: string, isValid: boolean}>;
  readonly password: Readonly<{value: string, isValid: boolean}>;
  readonly lastname: Readonly<{value: string, isValid: boolean}>;
  readonly firstname: Readonly<{value: string, isValid: boolean}>;
}

export const NAME = "sp";

useSlice(NAME, () => ({
  error: null,
  status: "idle", 
  validity: false,
  username: {value: "", isValid: false},
  password: {value: "", isValid: false},
  lastname: {value: "", isValid: false},
  firstname: {value: "", isValid: false},
}));

export default Object.freeze({NAME});