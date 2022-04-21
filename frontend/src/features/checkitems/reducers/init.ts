import {useReducer} from "../../../store";

import moveCheckitem from "./reducers/move";
import editCheckitem from "./reducers/edit";
import addOneCheckitem from "./reducers/addOne";
import destroyCheckitem from "./reducers/destroy";

import {EDIT_PENDING} from "../actions";
import {MOVE_PENDING} from "../actions";
import {CREATE_PENDING} from "../actions";
import {DESTROY_PENDING} from "../actions";


useReducer(MOVE_PENDING, (state, action) => {
  moveCheckitem(state, action.meta);
});


useReducer(EDIT_PENDING, (state, action) => {
  editCheckitem(state, action.meta);
});


useReducer(CREATE_PENDING, (state, {meta}) => {
  addOneCheckitem(state, {
    id: meta.id,
    content: meta.content,
    isComplete: false,
    idChecklist: meta.idChecklist,
  })
});


useReducer(DESTROY_PENDING, (state, action) => {
  destroyCheckitem(state, action.meta);
});