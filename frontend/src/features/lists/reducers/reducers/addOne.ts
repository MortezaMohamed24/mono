import idUtil from "/util/idUtil";
import {State} from "../../../../store";
import {addManyCards} from "/cards/reducers";
import {ListRawUnnested} from "../../entity";


function addOneList(state: State, list: ListRawUnnested) {
  const board = state.bd.findOne({id: list.idBoard});

  if (board) {
    idUtil.add(board.idLists, list.id);
  
    state.lt.addOne({
      id: list.id,
      title: list.title,
      idUser: board.idUser,
      idCards: [],
      idBoard: list.idBoard,
      isWatched: list.isWatched,
      sortMethod: list.sortMethod,
    });

    addManyCards(
      state, 
      list.cards.map(card => ({...card, idList: list.id}),
    ));
  }
}


export default addOneList;