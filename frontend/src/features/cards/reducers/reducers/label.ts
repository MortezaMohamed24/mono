import idUtil from "/util/idUtil";
import {State} from "/store";
import {CardLabelRequestMeta} from "/cards/actions";


function labelCard({ll, cd}: State, {idCard, idLabel}: CardLabelRequestMeta) {
  const card = cd.findOne({id: idCard});

  if (card) {
    const label = ll.findOne(idLabel);
   
    if (label) {
      if (label.idBoard === card.idBoard) {
        idUtil.add(card.idLabels, idLabel);
      }
    }
  }
}


export default labelCard;