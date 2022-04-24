import {State} from "/store";
import {INVALID} from "/util/formatter";
import formatters from "../../fields/formatters";
import {ChecklistEditRequestMeta} from "../../actions";


function editChecklist({ct}: State, meta: ChecklistEditRequestMeta) {
  const title = formatters.title(meta.title, {strict: false});
  const filter = formatters.filter(meta.filter, {strict: false});
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