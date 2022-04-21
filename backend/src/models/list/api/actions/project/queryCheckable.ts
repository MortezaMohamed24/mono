import {OID} from "#util/checker";
import {OBJECT} from "#util/checker";
import QueryType from "./queryType.js";
import {listProjectorCheckable} from "#models/list/methods/project";


const queryCheckable = OBJECT<QueryType>({
  idList: OID({}),
  projector: listProjectorCheckable,
});


export default queryCheckable;