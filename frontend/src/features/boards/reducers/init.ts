import editBoard from "./reducers/edit";
import destroyOne from "./reducers/destroyOne";
import addOneBoard from "./reducers/addOne";
import {navigate} from "/components/routerController/state";
import {useEffect} from "/store";
import {useReducer} from "/store";
import {CREATE_PENDING, EDIT_PENDING} from "../actions";
import {COPY_FULFILLED} from "../actions";
import {DESTROY_PENDING} from "../actions";
import {CREATE_FULFILLED} from "../actions";



useReducer(EDIT_PENDING, (state, {meta}) => {
  editBoard(state, meta);
});

useReducer(COPY_FULFILLED, (state, {payload}) => {
  addOneBoard(state, payload);
});

useEffect(COPY_FULFILLED, ({dispatch, action}) => {
  dispatch(navigate({
    url: `/boards/${action.payload.id}`,
    type: "push", 
  }));
});

useReducer(CREATE_FULFILLED, (state, {payload}) => {
  addOneBoard(state, payload);
});

useEffect(CREATE_FULFILLED, ({dispatch, action}) => {
  dispatch(navigate({
    url: `/boards/${action.payload.id}`,
    type: "push", 
  }));
});

useReducer(DESTROY_PENDING, (state, {meta: {idBoard}}) => {
  destroyOne(state, {idBoard});
});