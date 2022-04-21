import types from "./checkables.js";
import Error from "#util/error";
import Label from "#models/label";
import {INVALID_NAME} from "#models/label/errors";
import {INVALID_COLOR} from "#models/label/errors";
import {GenericCheckerWithError} from "#util/checker";


export const name = GenericCheckerWithError<Label["name"]>(
  types.name, 
  () => new Error(400, INVALID_NAME),
);

export const color = GenericCheckerWithError<Label["color"]>(
  types.color, 
  () => new Error(400, INVALID_COLOR),
);


export default Object.freeze({name, color});