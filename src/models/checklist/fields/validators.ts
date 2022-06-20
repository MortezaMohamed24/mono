import Error from "#util/error";
import types from "./checkables.js";
import Checklist from "src/models/checklist";
import {INVALID_TITLE} from "src/models/checklist/errors";
import {INVALID_FILTER} from "src/models/checklist/errors";
import {GenericCheckerWithError} from "#util/checker";


export const title = GenericCheckerWithError<Checklist["title"]>(
  types.title, 
  () => new Error(400, INVALID_TITLE),
);

export const filter = GenericCheckerWithError<Checklist["filter"]>(
  types.filter, 
  () => new Error(400, INVALID_FILTER),
);


export default Object.freeze({title, filter});