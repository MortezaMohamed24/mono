import Error from "#util/error";
import Board from "src/models/board";
import types from "./checkables.js";
import {INVALID_THEME} from "src/models/board/errors";
import {INVALID_TITLE} from "src/models/board/errors";
import {INVALID_IS_STARRED} from "src/models/board/errors";
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