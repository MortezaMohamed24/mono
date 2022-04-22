import {reducer} from "./reducers";
import {AnyAction} from "./actions";
import {ReadonlyState} from "./state";
import {WritableState} from "./state";
import {configureStore} from "@reduxjs/toolkit";
import {EffectsMiddleware} from "./effects";


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


export const store = configureStore<ReadonlyState, AnyAction>({
  reducer: reducer, 
  devTools: true,
  middleware: (getDefaultMiddlwares) => ([
    ...getDefaultMiddlwares(), 
    EffectsMiddleware,

    // Painfull TypeScript, for some reason, keep erroring that: 
    // "this array must have no more or less than one element" 
  ] as any)
});


export const dispatch = store.dispatch as Dispatch;
export const getState = store.getState as GetState;
export const subscribe = store.subscribe;


export default store;