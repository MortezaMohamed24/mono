import List from "#models/list";
import Error from "#util/error";
import checkables from "./formatters.js";
import {INVALID_TITLE} from "#models/list/errors";
import {INVALID_IS_WATCHED} from "#models/list/errors";
import {INVALID_SORT_METHOD} from "#models/list/errors";
import {GenericCheckerWithError} from "#util/checker";


export const title = GenericCheckerWithError<List["title"]>(
  checkables.title, 
  () => new Error(400, INVALID_TITLE),
);

export const isWatched = GenericCheckerWithError<List["isWatched"]>(
  checkables.isWatched, 
  () => new Error(400, INVALID_IS_WATCHED),
);

export const sortMethod = GenericCheckerWithError<List["sortMethod"]>(
  checkables.sortMethod, 
  () => new Error(400, INVALID_SORT_METHOD),
);


export default Object.freeze({title, isWatched, sortMethod});