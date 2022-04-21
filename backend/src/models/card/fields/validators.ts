import Card from "#models/card";
import Error from "#util/error";
import types from "./checkables.js";
import {INVALID_DUE} from "#models/card/errors";
import {INVALID_START} from "#models/card/errors";
import {INVALID_TITLE} from "#models/card/errors";
import {INVALID_IS_WATCHED} from "#models/card/errors";
import {INVALID_IS_COMPLETE} from "#models/card/errors";
import {INVALID_DESCRIPTION} from "#models/card/errors";
import {GenericCheckerWithError} from "#util/checker";


export const title = GenericCheckerWithError<Card["title"]>(
  types.title, 
  () => new Error(400, INVALID_TITLE),
);

export const dateDue = GenericCheckerWithError<Card["dateDue"]>(
  types.title, 
  () => new Error(400, INVALID_DUE),
);

export const dateStart = GenericCheckerWithError<Card["dateStart"]>(
  types.title, 
  () => new Error(400, INVALID_START),
);

export const isWatched = GenericCheckerWithError<Card["isWatched"]>(
  types.isWatched, 
  () => new Error(400, INVALID_IS_WATCHED),
);

export const isComplete = GenericCheckerWithError<Card["isComplete"]>(
  types.isComplete, 
  () => new Error(400, INVALID_IS_COMPLETE),
);

export const description = GenericCheckerWithError<Card["description"]>(
  types.description, 
  () => new Error(400, INVALID_DESCRIPTION),
);


export default Object.freeze({
  title,
  dateDue,
  dateStart,
  isWatched,
  isComplete,
  description,
});