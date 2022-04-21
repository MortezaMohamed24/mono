import {useReducer} from "/store";
import edit from "./reducers/edit";
import clear from "./reducers/clear";
import {EDIT} from "../actions";
import {CLEAR} from "../actions";
import {LOGIN_PENDING} from "../actions";
import {LOGIN_REJECTED} from "../actions";
import {LOGIN_FULFILLED} from "../actions";


useReducer(EDIT, (state, {payload}) => {
  edit(state, payload);
});

useReducer(CLEAR, (state) => {
  clear(state);
});

useReducer(LOGIN_PENDING, ({lg}) => {
  lg.error = null;
  lg.status = "loading";
});

useReducer(LOGIN_REJECTED, ({lg}, {error}) => {
  lg.error = error;
  lg.status = "failed";
});

useReducer(LOGIN_FULFILLED, ({lg}) => {
  lg.error = null;
  lg.status = "succeeded";
});