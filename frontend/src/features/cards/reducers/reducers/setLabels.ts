import idUtil from "/util/idUtil";
import {State} from "/store";
import {CardSetLabelsRequestMeta} from "/features/cards/actions";


function setCardLabels({cd, ll}: State, {idCard, idLabels}: CardSetLabelsRequestMeta) {
  const card = cd.findOne(idCard);

  if (card) {
    card.idLabels = [];
    
    for (let idLabel of idLabels) {
      const label = ll.findOne(idLabel);
     
      if (label) {
        if (label.idBoard === card.idBoard) {
          idUtil.add(card.idLabels, idLabel);
        }
      }
    }
  }
}


export default setCardLabels;