import store from "./store";
import {Dispatch} from "./store";
import {GetState} from "./store";
import {dispatch} from "./store";
import {getState} from "./store";
import {Actions} from "./actions";
import {AnyAction} from "./actions";
import {AnyActionKey} from "./actions";
import {AnyActionType} from "./actions";
import {useEffect} from "./effects";
import {useReducer} from "./reducers";
import {useSlice} from "./slices";
import {AnySlice} from "./slices";
import {AnySliceName} from "./slices";
import {ReadonlyState} from "./state";
import {WritableState} from "./state";
import {UseDispatch} from "./useDispatch";
import {useDispatch} from "./useDispatch";
import {UseSelector} from "./useSelector";
import {useSelector} from "./useSelector";


type State = WritableState


export {
  store,
  State,
  Dispatch,
  GetState,
  dispatch,
  getState,
  Actions,
  AnyAction,
  AnyActionKey,
  AnyActionType,
  useEffect,
  useReducer,
  useSlice,
  AnySlice,
  AnySliceName,
  ReadonlyState,
  WritableState,
  UseDispatch,
  useDispatch,
  UseSelector,
  useSelector,
}


export default Object.freeze({
  store,
  dispatch,
  getState,
  useEffect,
  useReducer,
  useSlice,
  useDispatch,
  useSelector,
})