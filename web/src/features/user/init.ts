import {useSlice} from "/store";
import {UserNative} from "./entity";


export const NAME = "ur";


declare global {
  export interface __INTERNAL_REDUX_STATE__ {
    [NAME]: UserNative
  }
}


useSlice(NAME, () => ({
  $error: null,
  $status: "idle",
}));