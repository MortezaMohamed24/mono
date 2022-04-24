import {NAME} from ".";
import {State} from "/store";


export const slice = (state: State) => (
  state[NAME]
);

export const index = (state: State) => (
  state[NAME].index
);

export const isOpen = (state: State) => (
  state[NAME].isOpen
);

export const idList = (state: State) => (
  state[NAME].idList
);

export const idLabelsChecked = (state: State) => (
  state[NAME].idLabelsChecked
);


export default Object.freeze({
  slice, 
  index,
  isOpen,
  idList,
  idLabelsChecked,
});