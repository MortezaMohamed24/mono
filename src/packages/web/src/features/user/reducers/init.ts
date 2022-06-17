import initUser from "./functions/init";
import clearUser from "./functions/clear";
import {useReducer} from "/store";
import onLoadRejected from "./functions/onLoadRejected";
import {LOAD_PENDING} from "../actions";
import {LOAD_REJECTED} from "../actions";
import {LOAD_FULFILLED} from "../actions";
import {EDIT_FULFILLED} from "../actions";
import {DESTROY_PENDING} from "../actions";
import onUserLoadPending from "./functions/onLoadPending";
import onUserEditFulfilled from "./functions/edit";


useReducer(LOAD_PENDING, (state) => {
  onUserLoadPending(state);
});

useReducer(LOAD_REJECTED, (state, action) => {
  onLoadRejected(state, action.error);
});

useReducer(LOAD_FULFILLED, (state, action) => {
  initUser(state, action.payload);
});

useReducer(EDIT_FULFILLED, (state, action) => {
  onUserEditFulfilled(state, action.meta);
});

useReducer(DESTROY_PENDING, (state) => {
  clearUser(state)
});