import {useReducer} from "/store";
import {SLICE} from "../constants";
import {editInstance} from "./editInstance";
import {selectOption} from "./selectOption";
import {createInstance} from "./createInstance";
import {deleteInstance} from "./deleteInstance";
import {SELECT_OPTION} from "../actions";
import {EDIT_INSTANCE} from "../actions";
import {CREATE_INSTANCE} from "../actions";
import {DELETE_INSTANCE} from "../actions";


useReducer(SELECT_OPTION, (state, {payload: {id, query}}) => {
  selectOption(state[SLICE], id, query);
});

useReducer(EDIT_INSTANCE, (state, {payload: {id, edits}}) => {
  editInstance(state[SLICE], id, edits);
});

useReducer(CREATE_INSTANCE, (state, {payload: {id, data}}) => {
  createInstance(state[SLICE], id, data);
});

useReducer(DELETE_INSTANCE, (state, {payload: {id}}) => {
  deleteInstance(state[SLICE], id);
});