import v from "../../fields/formatters";
import {State} from "../../../../store";
import {INVALID} from "/util/checker";
import {CardEditRequestMeta} from "/cards/actions";


function editCard({cd}: State, meta: CardEditRequestMeta) {
  const card = cd.findOne({id: meta.idCard});
  const due = v.dateDue(meta.dateDue);
  const start = v.dateStart(meta.dateStart);
  const title = v.title(meta.title);
  const isComplete = v.isComplete(meta.isComplete);
  const description = v.description(meta.description);

  if (!card) {
    return;
  }

  if (due !== INVALID) {
    card.dateDue = due;

    if (card.dateDue !==  null && card.dateStart !== null) {
      card.dateStart = card.dateStart > card.dateDue ? card.dateDue : card.dateStart;
    }
    
    if (card.dateDue === null && card.dateStart === null) {
      card.isComplete = false;
    }
  } 
  
  if (start !== INVALID) {
    card.dateStart = start;
  
    if (card.dateStart !== null && card.dateDue !== null) {
      card.dateDue = card.dateStart > card.dateDue ? card.dateStart : card.dateDue;
    }
  
    if (card.dateStart === null && card.dateDue === null) {
      card.isComplete = false;
    }
  } 
  
  if (title !== INVALID) {
    card.title = title;
  } 
  
  if ((isComplete !== INVALID) && (card.dateStart !== null || card.dateDue !== null)) {
    card.isComplete = isComplete
  } 
  
  if (description !== INVALID) {
    card.description = description;
  }
}


export default editCard;