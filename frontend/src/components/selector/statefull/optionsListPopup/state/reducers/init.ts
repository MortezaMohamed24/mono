import {NAME} from "../constants";
import {OPEN} from "../actions";
import {CLOSE} from "../actions";
import {useReducer} from "/store";


useReducer(OPEN, (state, {payload}) => {
  state[NAME] = {
    id: payload.id,
    isOpen: true,
    reference: payload.reference,
  };
});

useReducer(CLOSE, (state, {payload: {id}}) => {
  const slice = state[NAME];
  
  if (slice.isOpen && slice.id === id) {
    state[NAME] = {
      id: undefined,
      isOpen: false,
      reference: undefined,
    };
  }
});