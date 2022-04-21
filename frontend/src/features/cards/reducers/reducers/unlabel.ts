import idUtil from "/util/idUtil";
import {State} from "/store";
import {CardUnlabelRequestMeta} from "/cards/actions";


function unlabelCard({cd, ll}: State, {idCard, idLabel}: CardUnlabelRequestMeta) {
  const card = cd.findOne(idCard);
  const label = ll.findOne(idLabel);

  if (card) {
    if (label) {
      if (label.idBoard === card.idBoard) {
        idUtil.rem(card.idLabels, idLabel);
      }
    }
  }
}


export default unlabelCard;