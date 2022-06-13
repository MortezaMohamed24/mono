import {SLICE} from "./constants";
import {useSlice} from "/store";
import {State} from "./types";


declare global {
  export interface __INTERNAL_REDUX_STATE__ {
    [SLICE]: State
  }
}


useSlice(SLICE, () => ({}));