import idUtil from "/util/idUtil";
import {State} from "/store";
import {ListDestroyRequestMeta} from "/features/lists/actions";


function destroyOneList({bd, lt, cd, ct, cm}: State, {idList}: ListDestroyRequestMeta) {
  lt.destroyOne({id: idList});
  cd.destroyMany({idList: idList});
  ct.destroyMany({idList: idList});
  cm.destroyMany({idList: idList});

  const board = bd.findOne({idLists: idList});

  if (board) {
    idUtil.rem(board.idLists, idList);
  }
}


export default destroyOneList;