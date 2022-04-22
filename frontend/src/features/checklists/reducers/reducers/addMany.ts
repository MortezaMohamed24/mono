import {State} from "/store";
import addOneChecklist from "./addOne";
import {ChecklistRawUnnested} from "../../entity";


function addManyChecklists(state: State, checklists: ChecklistRawUnnested[]) {
  for (let entity of checklists) {
    addOneChecklist(state, entity);
  }
}


export default addManyChecklists;