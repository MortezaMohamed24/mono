import {init} from "./actions/actions";
import {Draft} from "immer";
import {Effect} from "./types";
import {GetState} from "./types";
import {Reducer} from "./types";
import {Dispatch} from "./types";
import {createDraft} from "immer";
import {finishDraft} from "immer";
import {Initializer} from "./types";
import {EffectsArray} from "./types";
import {MiddlwareApi} from "./types";
import {ReducersArray} from "./types";
import ThunkMiddleware from "redux-thunk";
import {configureStore} from "@reduxjs/toolkit";
import {InitailizersArray} from "./types";


declare global {
  export interface __INTERNAL_REDUX_ACTIONS__ {

  }
  
  export interface __INTERNAL_REDUX_STATE__ {
  
  }
}


// TODO: Delete this to let other code explictlly decides whether to use 
// ReadonlyState or WritableState
type State = WritableState
type AnySlice = State[AnyStateKey]
type RawState = __INTERNAL_REDUX_STATE__
type AnyStateKey = keyof State
type AnySliceName = keyof State
type ReadonlyState = RawState
type WritableState = Draft<RawState>

type Actions = __INTERNAL_REDUX_ACTIONS__
type AnyAction = Actions[AnyActionKey]
type AnyActionKey = keyof Actions
type AnyActionType = keyof Actions


const effects: EffectsArray = [];
const reducers: ReducersArray = [];
const initializers: InitailizersArray = [];


function reducer(currentState: RawState | undefined, action: AnyAction) {
  let nextState = createDraft(initialize(currentState));
  
  
  for (let [actionType, reducer] of reducers) {
    if (actionType === action.type) {
      reducer(nextState, action);
    }
  }
  

  return finishDraft(nextState); 
}

function useReducer<ActionType extends AnyActionType>(actionType: ActionType, ...newReducers: Reducer<Actions[ActionType]>[]) {
  for (let reducer of newReducers) {
    reducers.push([actionType, reducer as any]);
  }
}


function useSlice<TName extends AnySliceName>(name: TName, initializer: Initializer<TName>) {
  initializers.push([name, initializer]);
  dispatch(init());
}

function initialize(uninitializedState: Partial<ReadonlyState> = {}) {
  const initializedState: any = {};
  
  for (let [key, initiator] of initializers) {
    if (uninitializedState[key] === undefined) {
      initializedState[key] = initiator();
    } else {
      initializedState[key] = uninitializedState[key];
    }
  }
  
  return initializedState as ReadonlyState;
}


function useEffect<ActionType extends AnyActionType>(actionType: ActionType, ...newEffects: Effect<Actions[ActionType]>[]) {
  for (let effect of newEffects) {
    effects.push([actionType, effect as any]);
  }
}

function EffectsMiddleware({dispatch, getState}: MiddlwareApi) {
  return (next: Dispatch) => async (action: AnyAction) => {
    const returned = next(action);

    for (let [actionType, effect] of effects) {
      if (actionType === action.type) {
        await effect({action, dispatch, getState});
      }
    }

    return returned;
  };  
}


const store = configureStore({
  reducer,
  devTools: true,
  middleware: [ThunkMiddleware, EffectsMiddleware] as any,
});


const dispatch = store.dispatch as Dispatch;
const getState = store.getState as GetState;
const subscribe = store.subscribe;


export {
  store,
  State,
  Actions,
  reducer,
  AnySlice,
  RawState,
  useSlice,
  getState,
  dispatch,
  useEffect,
  AnyAction,
  subscribe,
  initialize,
  useReducer,
  AnyStateKey,
  AnyActionKey,
  AnyActionType,
  AnySliceName,
  ReadonlyState,
  WritableState,
  EffectsMiddleware,
};


export default Object.freeze({
  store,
  reducer,
  useSlice,
  getState,
  dispatch,
  useEffect,
  subscribe,
  initialize,
  useReducer,
  EffectsMiddleware,
});