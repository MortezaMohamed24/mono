import v from "../../fields/formatters";
import {State} from "/store";
import {INVALID} from "/util/formatter";
import {CardEditRequestMeta} from "/features/cards/actions";


function editCard({cd}: State, meta: CardEditRequestMeta) {
  const card = cd.findOne({id: meta.idCard});
  const title = v.title(meta.title, {strict: false});
  const dateDue = v.dateDue(meta.dateDue, {strict: false});
  const dateStart = v.dateStart(meta.dateStart, {strict: false});
  const isComplete = v.isComplete(meta.isComplete, {strict: false});
  const description = v.description(meta.description, {strict: false});

  if (!card) {
    return;
  }

  if (dateDue !== INVALID) {
    card.dateDue = dateDue;

    if (card.dateDue !==  null && card.dateStart !== null) {
      card.dateStart = card.dateStart > card.dateDue ? card.dateDue : card.dateStart;
    }
    
    if (card.dateDue === null && card.dateStart === null) {
      card.isComplete = false;
    }
  } 
  
  if (dateStart !== INVALID) {
    card.dateStart = dateStart;
  
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