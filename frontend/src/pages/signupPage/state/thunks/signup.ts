import {ERRORS} from "/api/signup";
import {signup} from "/api/signup";
import {GetState} from "/store";
import {Dispatch} from "/store";
import {RequestBody} from "/api/signup";
import {SignupActionPending} from "../actions";
import {SignupActionRejected} from "../actions";
import {SignupActionFulfilled} from "../actions";


const thunk = (body: RequestBody) => async (dispatch: Dispatch, getState: GetState) => {
  const state = getState().sp;

  if ((
    state.status !== "idle"
  ) || (
    state.validity !== true
  )) {
    return;
  }

  dispatch(SignupActionPending());

  try {
    await signup(body);
  } 
  
  catch (e: any) {
    dispatch(SignupActionRejected(e));
  }

  dispatch(SignupActionFulfilled())
};

thunk.ERRORS = ERRORS;


export default thunk;