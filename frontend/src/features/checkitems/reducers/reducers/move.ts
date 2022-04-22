import idUtil from "/util/idUtil";
import {State} from "/store";
import {CheckitemMoveRequestMeta} from "../../actions";


function moveCheckitem({ct}: State, {idCheckitem, index}: CheckitemMoveRequestMeta) {
  const checklist = ct.findOne({idCheckitems: idCheckitem});

  if (checklist) {
    idUtil.move(checklist.idCheckitems, idCheckitem, index);
  }
}


export default moveCheckitem;