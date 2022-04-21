import Error from "#util/error";
import Board from "#models/board";
import types from "./checkables.js";
import {INVALID_THEME} from "#models/board/errors";
import {INVALID_TITLE} from "#models/board/errors";
import {INVALID_IS_STARRED} from "#models/board/errors";
import {GenericCheckerWithError} from "#util/checker";


const title = GenericCheckerWithError(
  types.title, 
  () => new Error(400, INVALID_TITLE),
);

const theme = GenericCheckerWithError<Board["theme"]>(
  types.theme, 
  () => new Error(400, INVALID_THEME),
);

const isStarred = GenericCheckerWithError<Board["isStarred"]>(
  types.isStarred, 
  () => new Error(400, INVALID_IS_STARRED)
);


export default Object.freeze({title, theme, isStarred});