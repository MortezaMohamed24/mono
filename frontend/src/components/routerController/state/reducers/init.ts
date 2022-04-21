import {useReducer} from "/store";
import {REQUEST_PENDING} from "../actions";
import {REQUEST_REJECTED} from "../actions";
import {REQUEST_FULFILLED} from "../actions";


useReducer(REQUEST_PENDING, ({rr}, {meta}) => {
  rr.request.current = meta;
});

useReducer(REQUEST_REJECTED, ({rr}) => {
  rr.request.current = null;
});

useReducer(REQUEST_FULFILLED, ({rr}) => {
  rr.request.current = null;
});