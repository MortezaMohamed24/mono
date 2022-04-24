import {EDIT} from "../actions";
import {edit} from ".";
import {CLEAR} from "../actions";
import {clear} from ".";
import {useReducer} from "/store";
import {SIGNUP_PENDING} from "../actions";
import {SIGNUP_REJECTED} from "../actions";
import {SIGNUP_FULFILLED} from "../actions";


useReducer(EDIT, (state, {payload}) => {
  edit(state, payload);
});

useReducer(CLEAR, (state) => {
  clear(state);
});

useReducer(SIGNUP_PENDING, ({sp}) => {
  sp.error = null;
  sp.status = "loading";
});

useReducer(SIGNUP_REJECTED, ({sp}, {error}) => {
  sp.error = error;
  sp.status = "failed";
});

useReducer(SIGNUP_FULFILLED, ({sp}) => {
  sp.error = null;
  sp.status = "succeeded";
});