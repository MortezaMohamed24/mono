export type GlobalState = {
  idCardOpened: null | string;
  idBoardOpened: null | string;
}

export const NAME = "gl";

export function initialState(): GlobalState {
  return {
    idCardOpened: null,
    idBoardOpened: null,
  };
}

declare global {
  export interface __INTERNAL_REDUX_STATE__ {
    [NAME]: GlobalState;
  }
}


export default Object.freeze({NAME, initialState});