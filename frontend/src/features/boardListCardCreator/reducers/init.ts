import {OPEN} from "../actions";
import {MOVE} from "../actions";
import {NAME} from "../slice";
import {CLOSE} from "../actions";
import {useReducer} from "/store";
import {CHECK_LABELS} from "../actions";
import {UNCHECK_LABELS} from "../actions";
import {TOGGLE_CHECK_LABELS} from "../actions";


useReducer(OPEN, (state, {payload: {index, idList}}) => {
  state[NAME] = {
    index: index,
    idList: idList,
    isOpen: true,
    idLabelsChecked: [],
  };
});

useReducer(MOVE, (state, {payload: {index, idList}}) => {
  const slice = state[NAME]; 

  if (slice.isOpen) {
    if (index !== NaN && index !== -Infinity) {
      slice.index = index;
      slice.idList = idList;
    }
  }  
});

useReducer(CLOSE, (state, {payload: {idList}}) => {
  const slice = state[NAME]; 

  if (slice.isOpen) {
    if (slice.idList === idList) {
      state[NAME] = {isOpen: false};
    }
  }
});

useReducer(CHECK_LABELS, (state, {payload: {idLabels}}) => {
  const slice = state[NAME];

  if (slice.isOpen) {
    for (let idLabel of idLabels) {
      const includes = slice.idLabelsChecked.includes(idLabel);

      if (!includes) {
        slice.idLabelsChecked.push(idLabel)
      }
    }
  }
});

useReducer(UNCHECK_LABELS, (state, {payload: {idLabels}}) => {
  const slice = state[NAME];

  if (slice.isOpen) {
    for (let idLabel of idLabels) {
      const index = slice.idLabelsChecked.indexOf(idLabel);

      if (index !== -1) {
        slice.idLabelsChecked.splice(index, 1);
      }
    }
  }
});

useReducer(TOGGLE_CHECK_LABELS, (state, {payload: {idLabels}}) => {
  const slice = state[NAME];

  if (slice.isOpen) {
    for (let idLabel of idLabels) {
      const index = slice.idLabelsChecked.indexOf(idLabel);

      if (index === -1) {
        slice.idLabelsChecked.push(idLabel)
      } else {
        slice.idLabelsChecked.splice(index, 1);
      }
    }
  }
});