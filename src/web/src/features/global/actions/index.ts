import {O} from "ts-toolbelt";
import {A} from "ts-toolbelt";
import {Patch} from "immer";


// ---------- ACTION TYPES

export type CARD_OPENED = typeof CARD_OPENED;
export type CARD_CLOSED = typeof CARD_CLOSED;
export type BOARD_OPENED = typeof BOARD_OPENED;
export type BOARD_CLOSED = typeof BOARD_CLOSED;
export type APPLY_PATCHES = typeof APPLY_PATCHES;


export const CARD_OPENED = "global/cardOpened";
export const CARD_CLOSED = "global/cardClosed";
export const BOARD_OPENED = "global/boardOpened";
export const BOARD_CLOSED = "global/boardClosed";
export const APPLY_PATCHES = "global/applyPatches";


// ---------- ACTIONS

export type CardOpenedAction = O.Readonly<{
  type: CARD_OPENED;
  meta: undefined;
  error: undefined;
  payload: {idCard: string};
}, A.Key, "deep">

export type CardClosedAction = O.Readonly<{
  type: CARD_CLOSED;
  meta: undefined;
  error: undefined;
  payload: undefined;
}, A.Key, "deep">

export type BoardOpenedAction = O.Readonly<{
  type: BOARD_OPENED;
  meta: undefined;
  error: undefined;
  payload: {
    idBoard: string;
  };
}, A.Key, "deep">

export type BoardClosedAction = O.Readonly<{
  type: BOARD_CLOSED;
  meta: undefined;
  error: undefined;
  payload: undefined;
}, A.Key, "deep">

export type PatchesAppliedAction = O.Readonly<{
  type: APPLY_PATCHES;
  meta: undefined;
  error: undefined;
  payload: Patch[];
}, A.Key, "deep">


// ---------- ACTIONS GROUPED

export type AnyAction = 
  | CardOpenedAction
  | CardClosedAction
  | BoardOpenedAction
  | BoardClosedAction
  | PatchesAppliedAction

export type AllActions = {
  [CARD_OPENED]: CardOpenedAction;
  [CARD_CLOSED]: CardClosedAction;
  [BOARD_OPENED]: BoardOpenedAction;
  [BOARD_CLOSED]: BoardClosedAction;
  [APPLY_PATCHES]: PatchesAppliedAction;
}


// ---------- ACTION CREATORS

export const CardOpened = (payload: CardOpenedAction["payload"]): CardOpenedAction => ({
  type: CARD_OPENED,
  meta: undefined,
  error: undefined,
  payload: payload,
});

export const CardClosed = (): CardClosedAction => ({
  type: CARD_CLOSED,
  meta: undefined,
  error: undefined,
  payload: undefined,
});

export const BoardOpened = (payload: BoardOpenedAction["payload"]): BoardOpenedAction => ({
  type: BOARD_OPENED,
  meta: undefined,
  error: undefined,
  payload: payload,
});

export const BoardClosed = (): BoardClosedAction => ({
  type: BOARD_CLOSED,
  meta: undefined,
  error: undefined,
  payload: undefined,
});

export const ApplyPatches = (ptaches: PatchesAppliedAction["payload"]): PatchesAppliedAction => ({
  type: APPLY_PATCHES,
  meta: undefined,
  error: undefined,
  payload: ptaches,
});


export default Object.freeze({
  CARD_OPENED,
  CARD_CLOSED,
  BOARD_OPENED,
  BOARD_CLOSED,
  APPLY_PATCHES,
  CardOpened,
  CardClosed,
  BoardOpened,
  BoardClosed,
  ApplyPatches,
});