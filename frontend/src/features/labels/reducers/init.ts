import {useReducer} from "/store";
import {editLabel} from ".";
import {createLabel} from ".";
import {destroyOneLabel} from ".";
import {EDIT_PENDING} from "../actions";
import {CREATE_PENDING} from "../actions";
import {DESTROY_PENDING} from "../actions";


useReducer(EDIT_PENDING, (state, {meta}) => {
  editLabel(state, meta);
});


useReducer(CREATE_PENDING, (state, {meta}) => {
  createLabel(state, meta);
});


useReducer(DESTROY_PENDING, (state, {meta}) => {
  destroyOneLabel(state, meta);
});