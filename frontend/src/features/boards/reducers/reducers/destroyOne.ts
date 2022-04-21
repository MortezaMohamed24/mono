import idUtil from "/util/idUtil";
import {State} from "/store";
import {BoardDestroyRequestMeta} from "/boards/actions";


function destroyOneBoard({ur, bd, ll, lt, cd, ct, cm}: State, {idBoard}: BoardDestroyRequestMeta) {
  if (ur.$status === "succeeded") {
    idUtil.rem(ur.idBoards, idBoard);;  

    bd.destroyOne(idBoard);
    
    ll.destroyMany({idBoard});
    lt.destroyMany({idBoard});
    cd.destroyMany({idBoard});
    ct.destroyMany({idBoard});
    cm.destroyMany({idBoard});
  }
}


export default destroyOneBoard;