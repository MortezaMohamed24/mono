import {OID} from "#util/checker";
import {OBJECT} from "#util/checker";
import QueryType from "./queryType.js";
import {cardProjectorCheckable} from "src/models/card/methods/project";


const queryCheckable = OBJECT<QueryType>({
  idCard: OID({}),
  projector: cardProjectorCheckable,
});
  

export default queryCheckable;