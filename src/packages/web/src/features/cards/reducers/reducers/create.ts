import idUtil from "/util/idUtil";
import {State} from "/store";
import addOneCard from "./addOne";
import {CardCreateRequestMeta} from "/features/cards/actions";


function createCard(state: State, meta: CardCreateRequestMeta) {
  addOneCard(state, {
    id: meta.id,
    title: meta.title,
    idList: meta.idList,
    dateDue: null,
    idLabels: meta.idLabels,
    dateStart: null,
    isWatched: false,
    isComplete: false,
    checklists: [],
    description: meta.description,
    dateCreation: meta.dateCreation,
  });


  const list = state.lt.findOne(meta.idList);


  if (list) {
    idUtil.move(list.idCards, meta.id, meta.index);
  }
}


export default createCard;