import {NAME} from "./constants";
import {useSlice} from "/store";
import {SelectorState} from "./types";


declare global {
  export interface __INTERNAL_REDUX_STATE__ {
    [NAME]: SelectorState
  }
}


useSlice(NAME, () => ({
  id: undefined,
  isOpen: false,
  options: undefined,
}));