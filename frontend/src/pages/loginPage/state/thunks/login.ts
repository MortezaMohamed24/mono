import {login} from "/api/login";
import {ERRORS} from "/api/login";
import {Dispatch} from "/store";
import {GetState} from "/store";
import {RequestQuery} from "/api/login";
import {LoginActionPending} from "../actions";
import {LoginActionRejected} from "../actions";
import {LoginActionFulfilled} from "../actions";


export const thunk = (payload: RequestQuery) => async (dispatch: Dispatch, getState: GetState) => {
  let state = getState().lg;

  if (state.status === "loading") {
    return;
  }

  dispatch(LoginActionPending());

  try {
    await login(payload);
    dispatch(LoginActionFulfilled());
  } catch (error) {
    dispatch(LoginActionRejected(error));
  }
};


thunk.ERRORS = ERRORS;


export default thunk;