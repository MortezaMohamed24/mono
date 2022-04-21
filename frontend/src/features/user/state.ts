import {useSlice} from "../../store";
import {UserNative} from "./entity";


declare global {
  export interface __INTERNAL_REDUX_STATE__ {
    [USER_SLICE_NAME]: UserNative
  }
}


const USER_SLICE_NAME = "ur";


useSlice(USER_SLICE_NAME, () => ({
  $error: null,
  $status: "idle",
} as any));