// ---------- ACTION TYPES

export const OPEN = "board/cardCretor/open";
export const MOVE = "board/cardCreator/move";
export const CLOSE = "board/cardCretor/close";
export const CHECK_LABELS = "board/cardCreator/checkLabels";
export const UNCHECK_LABELS = "board/cardCreator/checkLabels";
export const TOGGLE_CHECK_LABELS = "board/cardCreator/toggleCheckLabels";

export type OPEN = typeof OPEN
export type MOVE = typeof MOVE
export type CLOSE = typeof CLOSE
export type CHECK_LABELS = typeof CHECK_LABELS
export type UNCHECK_LABELS = typeof UNCHECK_LABELS
export type TOGGLE_CHECK_LABELS = typeof TOGGLE_CHECK_LABELS


// ---------- ACTIONS

export type BoardCardCreatorOpenAction = {
  type: OPEN;
  meta: undefined;
  error: undefined;
  payload: {
    index: number;
    idList: string;
  };
}

/** 
 * This action assums the creator is already opened in "list-A". It moves the creator
 * to another list (specified by `action.payload.idList`) which I will call "list-B": 
 *   - Makes it displayed amongst list-B's cards at the index specified by `action.payload.index` 
 *   - Makes, from now on, create cards for list-B, not list-A
*/
export type BoardCardCreatorMoveAction = {
  type: MOVE;
  meta: undefined;
  error: undefined;
  payload: {
    index: number;
    idList: string;
  };
}

export type BoardCardCreatorCloseAction = {
  type: CLOSE;
  meta: undefined;
  error: undefined;
  payload: {
    /** The creator will only be closed if it is in the list specified by `this.idList` */
    idList: string;
  };
}

export type BoardCardCreatorCheckLabelsAction = {
  type: CHECK_LABELS;
  meta: undefined;
  error: undefined;
  payload: {
    idLabels: string[];
  }
}

export type BoardCardCreatorUncheckLabelsAction = {
  type: UNCHECK_LABELS;
  meta: undefined;
  error: undefined;
  payload: {
    idLabels: string[];
  }
}

export type BoardCardCreatorToggleCheckLabelsAction = {
  type: TOGGLE_CHECK_LABELS;
  meta: undefined;
  error: undefined;
  payload: {
    idLabels: string[];
  }
}


// ---------- ACTIONS GROUPED

export type AnyAction = 
  | BoardCardCreatorOpenAction
  | BoardCardCreatorMoveAction
  | BoardCardCreatorCloseAction
  | BoardCardCreatorCheckLabelsAction
  | BoardCardCreatorUncheckLabelsAction
  | BoardCardCreatorToggleCheckLabelsAction

export type AllActions = {
  [OPEN]: BoardCardCreatorOpenAction;
  [MOVE]: BoardCardCreatorMoveAction;
  [CLOSE]: BoardCardCreatorCloseAction;
  [CHECK_LABELS]: BoardCardCreatorCheckLabelsAction;
  [UNCHECK_LABELS]: BoardCardCreatorUncheckLabelsAction;
  [TOGGLE_CHECK_LABELS]: BoardCardCreatorToggleCheckLabelsAction;
}


// ---------- ACTION CREATORS

export const BoardCardCreatorOpenAction = (payload: BoardCardCreatorOpenAction["payload"]): BoardCardCreatorOpenAction => ({
  type: OPEN,
  meta: undefined,
  error: undefined,
  payload: payload,
});

export const BoardCardCreatorMoveAction = (payload: BoardCardCreatorMoveAction["payload"]): BoardCardCreatorMoveAction => ({
  type: MOVE,
  meta: undefined,
  error: undefined,
  payload: payload,
});

export const BoardCardCreatorCloseAction = (payload: BoardCardCreatorCloseAction["payload"]): BoardCardCreatorCloseAction => ({
  type: CLOSE,
  meta: undefined,
  error: undefined,
  payload: payload,
});

export const BoardCardCreatorCheckLabelsAction = (idLabels: string | string[]): BoardCardCreatorCheckLabelsAction => ({
  type: CHECK_LABELS,
  meta: undefined,
  error: undefined,
  payload: {
    idLabels: typeof idLabels === "string" ? [idLabels] : idLabels
  },
});

export const BoardCardCreatorUncheckLabelsAction = (idLabels: string | string[]): BoardCardCreatorUncheckLabelsAction => ({
  type: UNCHECK_LABELS,
  meta: undefined,
  error: undefined,
  payload: {
    idLabels: typeof idLabels === "string" ? [idLabels] : idLabels
  },
});

export const BoardCardCreatorToggleCheckLabelsAction = (idLabels: string | string[]): BoardCardCreatorToggleCheckLabelsAction => ({
  type: TOGGLE_CHECK_LABELS,
  meta: undefined,
  error: undefined,
  payload: {
    idLabels: typeof idLabels === "string" ? [idLabels] : idLabels
  },
});


// ---------- ACTION CREATOR ALIASES

export const open = BoardCardCreatorOpenAction;
export const move = BoardCardCreatorMoveAction;
export const close = BoardCardCreatorCloseAction;
export const check = BoardCardCreatorCheckLabelsAction;
export const toggle = BoardCardCreatorToggleCheckLabelsAction;
export const uncheck = BoardCardCreatorUncheckLabelsAction;


export default Object.freeze({
  OPEN,
  MOVE,
  CLOSE,
  CHECK_LABELS,
  UNCHECK_LABELS,
  BoardCardCreatorOpenAction,
  BoardCardCreatorMoveAction,
  BoardCardCreatorCloseAction,
  BoardCardCreatorCheckLabelsAction,
  BoardCardCreatorUncheckLabelsAction,
  BoardCardCreatorToggleCheckLabelsAction,
  open,
  move,
  close,
  check,
  toggle,
  uncheck,
});