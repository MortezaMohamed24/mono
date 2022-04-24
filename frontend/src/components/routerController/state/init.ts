import {useSlice} from "/store";
import {AnyRequest} from "../requests";


declare global {
  export interface __INTERNAL_REDUX_STATE__ {
    [NAME]: RouterState;
  }
}

export type RouterState = {
  request: {current: null | AnyRequest}
}

/** A short for "Redux Router" */
export const NAME = "rr";


useSlice(NAME, () => ({
  request: {current: null},
}))