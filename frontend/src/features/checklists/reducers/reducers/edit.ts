import v from "../../fields/formatters";
import {State} from "/store";
import {INVALID} from "/util/formatter";
import {ChecklistEditRequestMeta} from "../../actions";


function editChecklist({ct}: State, meta: ChecklistEditRequestMeta) {
  const title = v.title(meta.title);
  const filter = v.filter(meta.filter);
  const checklist = ct.findOne({id: meta.idChecklist});

  if (!checklist) { 
    return;
  } if (title !== INVALID) { 
    checklist.title = title;
  } if (filter !== INVALID) {
    checklist.filter = filter;
  }
}


export default editChecklist;