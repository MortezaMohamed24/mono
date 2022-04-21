import idUtil from "/util/idUtil";
import {State} from "/store";
import {CardDestroyRequestMeta} from "/cards/actions";


function destroyOneCard({lt, cd, ct, cm}: State, {idCard}: CardDestroyRequestMeta) {
  const card = cd.findOne(idCard);

  if (card) {
    cd.destroyOne(idCard);
    ct.destroyMany({idCard});
    cm.destroyMany({idCard});

    const list = lt.findOne(card.idList);
  
    if (list) {
      idUtil.rem(list.idCards, idCard);
    }
  }
}


export default destroyOneCard;