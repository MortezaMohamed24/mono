import {Patch} from "immer";
import {State} from "/store";
import {useReducer} from "/store";
import {CARD_OPENED} from "../actions";
import {CARD_CLOSED} from "../actions";
import {BOARD_CLOSED} from "../actions";
import {BOARD_OPENED} from "../actions";
import {applyPatches} from "immer";
import {enablePatches} from "immer";
import {APPLY_PATCHES} from "../actions";


useReducer(CARD_OPENED, ({gl}, {payload: {idCard}}) => {
  gl.idCardOpened = idCard;
});

useReducer(CARD_CLOSED, ({gl}) => {
  gl.idCardOpened = null;
});

useReducer(BOARD_OPENED, ({gl}, {payload: {idBoard}}) => {
  gl.idBoardOpened = idBoard;
});

useReducer(BOARD_CLOSED, ({gl}) => {
  gl.idBoardOpened = null;
});

useReducer(APPLY_PATCHES, (state: State, action) => {
  // `applyPatches()` expects a mutable array
  return applyPatches(state, action.payload.slice() as Patch[]);
});


// For `applyPatches` to work, `immer` requires this function to be invoked
enablePatches();