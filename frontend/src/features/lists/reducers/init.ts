import {useReducer} from "/store";
import editList from "./reducers/edit";
import sortList from "./reducers/sort";
import addOneList from "./reducers/addOne";
import createList from "./reducers/create";
import {addManyCards} from "/cards/reducers";
import {addManyLabels} from "/labels/reducers";
import destroyOneList from "./reducers/destroyOne";
import destroyAllOwnCardsOfList from "./reducers/destroyAllOwnCards";
import {EDIT_PENDING} from "/lists/actions";
import {MOVE_PENDING} from "/lists/actions";
import {SORT_PENDING} from "/lists/actions";
import {MOVE_FULFILLED} from "/lists/actions";
import {COPY_FULFILLED} from "/lists/actions";
import {CREATE_PENDING} from "/lists/actions";
import {DESTROY_PENDING} from "/lists/actions";
import {MOVE_ALL_OWN_CARDS_PENDING} from "/lists/actions";
import {MOVE_ALL_OWN_CARDS_FULFILLED} from "/lists/actions";
import {DESTROY_ALL_OWN_CARDS_PENDING} from "/lists/actions";


useReducer(EDIT_PENDING, (state, {meta}) => {
  editList(state, meta);
});

useReducer(SORT_PENDING, (state, {meta}) => {
  sortList(state, meta);
});

useReducer(MOVE_PENDING, (state, {meta}) => {
  destroyOneList(state, {idList: meta.idList});
});

useReducer(MOVE_FULFILLED, (state, {payload: {list, labels}}) => {
  addManyLabels(state, labels);
  addOneList(state, list);
});

useReducer(COPY_FULFILLED, (state, {payload: {list, labels}}) => {
  addManyLabels(state, labels);
  addOneList(state, list);
});

useReducer(CREATE_PENDING, (state, {meta}) => {
  createList(state, meta);
});

useReducer(DESTROY_PENDING, (state, {meta}) => {
  destroyOneList(state, meta);
});

useReducer(MOVE_ALL_OWN_CARDS_PENDING, (state, {meta}) => {
  destroyAllOwnCardsOfList(state, {idList: meta.idListA});
});

useReducer(MOVE_ALL_OWN_CARDS_FULFILLED, (state, {payload: {cards, labels}}) => {
  addManyLabels(state, labels);
  addManyCards(state, cards);
});

useReducer(DESTROY_ALL_OWN_CARDS_PENDING, (state, {meta}) => {
  destroyAllOwnCardsOfList(state, meta);
});