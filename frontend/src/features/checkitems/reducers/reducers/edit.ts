import f from "/features/checkitems/fields/formatters";
import {State} from "/store";
import {INVALID} from "/util/formatter";
import {CheckitemEditRequestMeta} from "/features/checkitems/actions";


function editCheckitem({cm}: State, meta: CheckitemEditRequestMeta) {
  const content = f.content(meta.content);
  const checkitem = cm.findOne({id: meta.idCheckitem});
  const isComplete = f.isComplete(meta.isComplete);

  if (!checkitem) { 
    return; 
  } if (content !== INVALID) { 
    checkitem.content = content; 
  } if (isComplete !== INVALID) { 
    checkitem.isComplete = isComplete; 
  }
}


export default editCheckitem;