import idUtil from "/util/idUtil";
import {State} from "/store";
import setCardLabels from "./setLabels";
import {CardRawUnnested} from "../../entity/rawUnnested";
import {addManyChecklists} from "/checklists/reducers";


function addOneCard(state: State, card: CardRawUnnested) {
  const list = state.lt.findOne({id: card.idList});

  if (list) {
    idUtil.add(list.idCards, card.id);

    state.cd.addOne({
      id: card.id,
      title: card.title,
      idUser: list.idUser,
      idList: card.idList,
      idBoard: list.idBoard,
      dateDue: card.dateDue,
      idLabels: [],
      isWatched: card.isWatched,
      dateStart: card.dateStart,
      isComplete: card.isComplete,
      description: card.description,
      idChecklists: [],
      dateCreation: card.dateCreation,
    });

    setCardLabels(state, {
      idCard: card.id,
      idLabels: card.idLabels,      
    });

    addManyChecklists(state, card.checklists.map(checklist => ({
      ...checklist, 
      idCard: card.id,
    })));
  }
}


export default addOneCard;