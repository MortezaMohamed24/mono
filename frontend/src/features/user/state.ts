import {UserNative} from "./entity";


export const NAME = "ur";

export function initialState() {
  return {
    $error: null,
    $status: "idle",
  };
}

declare global {
  export interface __INTERNAL_REDUX_STATE__ {
    [NAME]: UserNative
  }
}


export default Object.freeze({NAME, initialState});