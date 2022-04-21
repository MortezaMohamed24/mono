import types from "./checkables.js";
import Error from "#util/error";
import Checkitem from "../model/index.js";
import {INVALID_CONTENT} from "../errors.js";
import {INVALID_IS_COMPLETE} from "../errors.js";
import {GenericCheckerWithError} from "#util/checker";


const content = GenericCheckerWithError<Checkitem["content"]>(
  types.content, 
  () => new Error(400, INVALID_CONTENT),
);

const isComplete = GenericCheckerWithError<Checkitem["isComplete"]>(
  types.content, 
  () => new Error(400, INVALID_IS_COMPLETE),
);


export default Object.freeze({content, isComplete});