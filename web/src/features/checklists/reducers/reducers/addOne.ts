import idUtil from "/util/idUtil";
import {State} from "/store";
import {addManyCheckitems} from "/features/checkitems/reducers";
import {ChecklistRawUnnested} from "../../entity";


function addOneChecklist(state: State, checklist: ChecklistRawUnnested) {
  const card = state.cd.findOne({id: checklist.idCard});

  if (card) {
    idUtil.add(card.idChecklists, checklist.id);

    state.ct.addOne({
      id: checklist.id,
      title: checklist.title,
      filter: checklist.filter,
      idUser: card.idUser,
      idList: card.idList,
      idCard: card.id,
      idBoard: card.idBoard,
      idCheckitems: [],
    });

    addManyCheckitems(
      state, 
      checklist.checkitems.map(checkitem => ({
        ...checkitem, 
        idChecklist: checklist.id,
      })),
    );
  }
}


export default addOneChecklist;