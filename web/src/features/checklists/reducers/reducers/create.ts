import {ALL} from "../../fields";
import {State} from "/store";
import addOneChecklist from "./addOne";
import {ChecklistCreateRequestMeta} from "../../actions";


function createChecklist(state: State, meta: ChecklistCreateRequestMeta) {
  addOneChecklist(state, {
    id: meta.id,
    title: meta.title,
    filter: ALL,
    idCard: meta.idCard,
    checkitems: [],
  });
}


export default createChecklist;