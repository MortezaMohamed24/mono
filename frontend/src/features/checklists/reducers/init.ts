import {useReducer} from "../../../store";
import {ALL} from "../fields";
import editChecklist from "./reducers/edit";
import addOneChecklist from "./reducers/addOne";
import destroyChecklist from "./reducers/destroy";
import {EDIT_PENDING} from "../actions";
import {CREATE_PENDING} from "../actions";
import {DESTROY_PENDING} from "../actions";


useReducer(EDIT_PENDING, (state, {meta}) => {
  editChecklist(state, meta);
});

useReducer(CREATE_PENDING, (state, {meta}) => {
  addOneChecklist(state, {
    id: meta.id,
    title: meta.title,
    filter: ALL,
    idCard: meta.idCard,
    checkitems: [],
  });
});

useReducer(DESTROY_PENDING, (state, {meta}) => {
  destroyChecklist(state, meta);
});