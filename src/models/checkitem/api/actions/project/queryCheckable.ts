import {OID} from "#util/checker";
import {OBJECT} from "#util/checker";
import QueryType from "./queryType.js";
import {checkitemProjectorCheckable} from "src/models/checkitem/methods/project";


const queryCheckable = OBJECT<QueryType>({
  projector: checkitemProjectorCheckable,
  idCheckitem: OID({}),
});


export default queryCheckable;