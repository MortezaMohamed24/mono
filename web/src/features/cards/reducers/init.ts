import editCard from "./reducers/edit";
import labelCard from "./reducers/label";
import addOneCard from "./reducers/addOne";
import createCard from "./reducers/create";
import unlabelCard from "./reducers/unlabel";
import {useReducer} from "/store";
import destroyOneCard from "./reducers/destroyOne";
import {addManyLabels} from "/features/labels/reducers";
import {setCardLabels} from ".";
import {EDIT_PENDING} from "/features/cards/actions";
import {MOVE_PENDING} from "/features/cards/actions";
import {LABEL_PENDING} from "/features/cards/actions";
import {MOVE_FULFILLED} from "/features/cards/actions";
import {COPY_FULFILLED} from "/features/cards/actions";
import {CREATE_PENDING} from "/features/cards/actions";
import {DESTROY_PENDING} from "/features/cards/actions";
import {UNLABEL_PENDING} from "/features/cards/actions";
import {SET_LABELS_PENDING} from "/features/cards/actions";


useReducer(EDIT_PENDING, (state, {meta}) => {
  editCard(state, meta);
});

useReducer(COPY_FULFILLED, (state, {payload}) => {
  addManyLabels(state, payload.labels);
  addOneCard(state, payload.card);
});

useReducer(MOVE_PENDING, (state, {meta}) => {
  destroyOneCard(state, {idCard: meta.idCard});
});

useReducer(MOVE_FULFILLED, (state, {payload}) => {
  addManyLabels(state, payload.labels);
  addOneCard(state, payload.card);
});

useReducer(LABEL_PENDING, (state, {meta}) => {
  labelCard(state, meta);
});

useReducer(CREATE_PENDING, (state, {meta}) => {
  createCard(state, meta);
});

useReducer(DESTROY_PENDING, (state, {meta}) => {
  destroyOneCard(state, meta);
});

useReducer(UNLABEL_PENDING, (state, {meta}) => {
  unlabelCard(state, meta);
});

useReducer(SET_LABELS_PENDING, (state, {meta}) => {
  setCardLabels(state, meta);
});