import {Draft} from "immer";


declare global {
  export interface __INTERNAL_REDUX_STATE__ {

  }
}


export type RawState = __INTERNAL_REDUX_STATE__
export type ReadonlyState = RawState
export type WritableState = Draft<RawState>