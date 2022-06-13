import {OID} from "#util/checker";
import {OBJECT} from "#util/checker";
import QueryType from "./queryType.js";
import {boardProjectorCheckable} from "src/models/board/methods/project";


const queryCheckable = OBJECT<QueryType>({
  idBoard: OID({}),
  projector: boardProjectorCheckable, 
});


export default queryCheckable;