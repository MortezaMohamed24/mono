import {Dispatch} from "./store";
import {GetState} from "./store";
import {AnyAction} from "./actions";
import {AnyActionType} from "./actions";
import { Actions } from ".";


export type Effect<Action extends AnyAction> = (
  arg: {
    action: Action;
    dispatch: Dispatch;
    getState: GetState<"readonly">; 
  },
) => void | Promise<void>


export const effects: [AnyActionType, Effect<AnyAction>][] = [];


export function useEffect<ActionType extends AnyActionType>(actionType: ActionType, ...newEffects: Effect<Actions[ActionType]>[]) {
  for (let effect of newEffects) {
    effects.push([actionType, effect as any]);
  }
}

export function EffectsMiddleware({dispatch, getState}: any) {
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