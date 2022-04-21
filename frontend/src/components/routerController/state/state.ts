import {useSlice} from "/store";
import {AnyRequest} from "../requests";


declare global {
  export interface __INTERNAL_REDUX_STATE__ {
    [REDUX_REACT_ROUTER_SLICE_NAME]: RouterState;
  }
}

export type RouterState = {
  request: {current: null | AnyRequest}
}

/** A short for "Redux Router" */
export const REDUX_REACT_ROUTER_SLICE_NAME = "rr";


useSlice(REDUX_REACT_ROUTER_SLICE_NAME, () => ({
  request: {current: null},
}));