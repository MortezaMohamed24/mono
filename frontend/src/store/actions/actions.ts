declare global {
  export interface __INTERNAL_REDUX_ACTIONS__ {
    [INIT]: InitReduxStateAction;
  }
}


export type INIT = typeof INIT;
export const INIT = "__INIT__";


export type InitReduxStateAction = {
  type: INIT;
  meta: undefined;
  error: undefined;
  payload: undefined;
}


export const InitReduxStateAction = (): InitReduxStateAction => ({
  type: INIT,
  meta: undefined,
  error: undefined,
  payload: undefined,
});


export const init = InitReduxStateAction;


export default Object.freeze({
  INIT,
  init,
  InitReduxStateAction,
});