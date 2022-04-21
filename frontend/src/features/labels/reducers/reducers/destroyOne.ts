import idUtil from "/util/idUtil";
import {State} from "/store";
import {LabelDestroyRequestMeta} from "/labels/actions";


function destroyOneLabel({bd, ll}: State, {idLabel}: LabelDestroyRequestMeta) {  
  ll.destroyOne({id: idLabel});

  const board = bd.findOne({idLabels: idLabel});
  
  if (board) {
    idUtil.rem(board.idLabels, idLabel);
  }
}


export default destroyOneLabel;