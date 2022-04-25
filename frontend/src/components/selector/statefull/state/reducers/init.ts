import {OPEN} from "../actions";
import {CLOSE} from "../actions";
import {SELECT} from "../actions";
import { NAME } from "../constants";
import {useReducer} from "/store";


useReducer(OPEN, (state, {payload}) => {
  state[NAME] = {
    id: payload.id,
    isOpen: true,
    options: payload.options,
    reference: payload.reference,
  };
})

useReducer(CLOSE, (state, {payload: {id}}) => {
  const slice = state[NAME];
  
  if (slice.isOpen) {
    if (slice.id === id) {
      state[NAME] = {
        id: undefined,
        isOpen: false,
        options: undefined,
        reference: undefined,
      };
    }
  }
});

useReducer(SELECT, (state, {payload: {id, option}}) => {
  const slice = state[NAME];

  if (slice.isOpen) {
    if (slice.id === id) {
      slice.
    }
  }
});