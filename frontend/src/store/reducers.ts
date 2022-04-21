import {produce} from "immer";
import {Actions} from "./actions";
import {RawState} from "./state";
import {AnyAction} from "./actions";
import {initialize} from "./slices";
import {WritableState} from "./state";
import {AnyActionType} from "./actions";


export type Reducer<Action extends AnyAction> = (
  state: WritableState, 
  action: Action,
) => WritableState | void

export type Reducers = [
  AnyActionType,
  Reducer<AnyAction>,
][]


export const reducers: Reducers = [];


export function useReducer<ActionType extends AnyActionType>(actionType: ActionType, ...newReducers: Reducer<Actions[ActionType]>[]) {
  for (let reducer of newReducers) {
    reducers.push([actionType, reducer as any]);
  }
}

export function reducer(currentState: RawState | undefined, action: AnyAction) {
  let nextState = initialize(currentState);
  
  
  for (let [actionType, reducer] of reducers) {
    if (actionType === action.type) {
      nextState = produce(nextState, (draft) => reducer(draft, action));
    }
  }
  
  
  return nextState;
}