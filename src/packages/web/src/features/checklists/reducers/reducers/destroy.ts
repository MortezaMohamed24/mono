import idUtil from "/util/idUtil";
import {State} from "/store";
import {ChecklistDestroyRequestMeta} from "../../actions";


function destroyChecklist({cd, ct, cm}: State, {idChecklist}: ChecklistDestroyRequestMeta) {
  ct.destroyOne({id: idChecklist});
  cm.destroyMany({idChecklist: idChecklist});

  const card = cd.findOne({idChecklists: idChecklist});

  if (card) {
    idUtil.rem(card.idChecklists, idChecklist);
  }
}


export default destroyChecklist;