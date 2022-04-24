import {useSlice} from "/store";


declare global {
  export interface __INTERNAL_REDUX_STATE__ {
    [NAME]: LoginState
  }
}

export type LoginState = {
  readonly error: null; 
  readonly status: "idle" | "loading" |  "succeeded";
  readonly username: Readonly<{value: string, isValid: boolean}>;
  readonly password: Readonly<{value: string, isValid: boolean}>;
} | {
  readonly error: unknown;
  readonly status: "failed";
  readonly username: Readonly<{value: string, isValid: boolean}>;
  readonly password: Readonly<{value: string, isValid: boolean}>;
}

export const NAME = "lg";

useSlice(NAME, () => ({
  error: null,
  status: "idle", 
  username: {value: "", isValid: false},
  password: {value: "", isValid: false},
}));


export default Object.freeze({NAME});