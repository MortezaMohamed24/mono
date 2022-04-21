import {OID} from "#util/checker";
import {OBJECT} from "#util/checker";
import QueryType from "./queryType.js";
import {checklistProjectorCheckable} from "#models/checklist/methods/project";


const queryCheckable = OBJECT<QueryType>({
  project: checklistProjectorCheckable,
  idChecklist: OID({}),
});


export default queryCheckable;