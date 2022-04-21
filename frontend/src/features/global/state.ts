import {useSlice} from "/store/slices";


declare global {
  export interface __INTERNAL_REDUX_STATE__ {
    [GLOBAL_SLICE_NAME]: GlobalState;
  }
}

export type GlobalState = {
  idCardOpened: null | string;
  idBoardOpened: null | string;
}

export const GLOBAL_SLICE_NAME = "gl";


useSlice(GLOBAL_SLICE_NAME, () => ({
  idCardOpened: null,
  idBoardOpened: null,
}));