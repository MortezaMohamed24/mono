import idUtil from "/util/idUtil";
import {State} from "/store";
import {CheckitemRawUnnested} from "/features/checkitems/entity";


function addOneCheckitem({ur, ct, cm}: State, checkitem: CheckitemRawUnnested) {
  if (ur.$status !== "succeeded") {
    return;
  }

  const checklist = ct.findOne({id: checkitem.idChecklist});

  if (checklist) {
    idUtil.add(checklist.idCheckitems, checkitem.id);
    
    cm.addOne({
      id: checkitem.id,
      idUser: checklist.idUser,
      idList: checklist.idList,
      idCard: checklist.idCard,
      idBoard: checklist.idBoard,
      content: checkitem.content,
      isComplete: checkitem.isComplete,
      idChecklist: checklist.id,    
    });
  }
}


export default addOneCheckitem;