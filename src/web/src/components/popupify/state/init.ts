import {NAME} from "./constants";
import {State} from "./types";
import {History} from "./history";
import {useSlice} from "/store";


declare global {
  export interface __INTERNAL_REDUX_STATE__ {
    [NAME]: State;
  }
}

useSlice(NAME, () => ({
  history: new History(),
}));