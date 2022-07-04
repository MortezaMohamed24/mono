import {useSlice} from "/store";


declare global {
  export interface __INTERNAL_REDUX_STATE__ {
    [NAME]: GlobalState;
  }
}

export type GlobalState = {
  idCardOpened: null | string;
  idBoardOpened: null | string;
}

export const NAME = "gl";


useSlice(NAME, () => ({
  idCardOpened: null,
  idBoardOpened: null,
}));