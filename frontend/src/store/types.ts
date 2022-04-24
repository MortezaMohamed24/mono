import {RawState} from "./store";
import {AnyAction} from "./store";
import {AnySliceName} from "./store";
import ThunkMiddleware from "redux-thunk";
import {WritableState} from "./store";
import {AnyActionType} from "./store";
import {ReadonlyState} from "./store";
import {EffectsMiddleware} from "./store";


export type Effect<TAction extends AnyAction> = (
  arg: EffectApi<TAction>,
) => void | Promise<void>


export type EffectApi<TAction extends AnyAction> = {
  action: TAction;
  dispatch: Dispatch;
  getState: GetState<"readonly">; 
}

export type EffectsArray = [
  AnyActionType, 
  Effect<AnyAction>,
][];

export type Middlwares = ReadonlyArray<
  | typeof ThunkMiddleware
  | typeof EffectsMiddleware
>

export type Dispatch = <TAction extends AnyAction | ((...anys: any[]) => any)>(
  action: TAction
) => (
  TAction extends (...anys: any[]) => AnyAction 
    ? ReturnType<TAction>
    : AnyAction 
)

export type GetState<Writablity extends "readonly" | "writable" = "readonly"> = 
  Writablity extends "readonly"
    ? () => ReadonlyState
    : () => WritableState


export type Reducer<Action extends AnyAction> = (
  state: WritableState, 
  action: Action,
) => WritableState | void

export type ReducersArray = [
  AnyActionType,
  Reducer<AnyAction>,
][]

export type UseSelector = <TSelected = unknown>(

  selector: (
    state: WritableState,
  ) => TSelected,

  equalityFn?: (
    left: TSelected, 
    right: TSelected,
  ) => boolean,

) => (
  TSelected
)

export type UseDispatch = () => (
  Dispatch
)

export type MiddlwareApi = {
  dispatch: Dispatch;
  getState: GetState;
}


export type Initializer<Name extends AnySliceName> = () => (
  RawState[Name]
)

export type InitailizersArray = [
  AnySliceName, 
  Initializer<AnySliceName>,
][]