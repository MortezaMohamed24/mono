import {SLICE} from "./constants";
import {State as StoreState} from "/store";
import {ID, Option, Selector} from "./types";


type State = Pick<StoreState, SLICE>


export const selectState = (state: State) => (
  state[SLICE]
);

export const selectInstance = <TOption extends {} = {}>(instanceID: ID) => (state: State) => (
  state[SLICE][instanceID] as (undefined | Selector<TOption>)
);

export const selectOptions = <TOption extends {} = {}>(instanceID: ID) => (state: State) => (
  state[SLICE][instanceID]?.options as (undefined | Option<TOption>[])
);

export const selectCaption = (instanceID: ID) => (state: State) => (
  state[SLICE][instanceID]?.caption
);

export const selectSelected = (instanceID: ID) => (state: State) => (
  state[SLICE][instanceID]?.selected
);

export const selectSelectedOption = <TOption extends {} = {}>(instanceID: ID) => (state: State) => {
  const instance = state[SLICE][instanceID]; 
  
  if (instance) {
    return instance.options[instance.selected] as any as (undefined | Option<TOption>)
  }
};

export const selectNoOpyionsMessage = (instanceID: ID) => (state: State) => (
  state[SLICE][instanceID]?.noOptionsMessage
);


export default Object.freeze({
  selectState,
  selectInstance,
  selectOptions,
  selectCaption,
  selectSelected,
  selectSelectedOption,
  selectNoOpyionsMessage,
});