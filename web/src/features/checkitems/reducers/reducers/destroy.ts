import idUtil from "/util/idUtil";
import {State} from "/store";
import {CheckitemDestroyRequestMeta} from "/features/checkitems/actions";


function destroyCheckitem({ct, cm}: State, {idCheckitem}: CheckitemDestroyRequestMeta) {
  cm.destroyOne({id: idCheckitem});

  const checklist = ct.findOne({idCheckitems: idCheckitem});

  if (checklist) {
    idUtil.rem(checklist.idCheckitems, idCheckitem);
  }
}


export default destroyCheckitem;