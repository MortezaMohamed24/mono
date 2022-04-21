import idUtil from "/util/idUtil";
import {State} from "/store";
import {addManyLists} from "/lists/reducers";
import {addManyLabels} from "/labels/reducers";
import {BoardRawUnnested} from "/boards/entity";


function addOneBoard(state: State, board: BoardRawUnnested) {
  if (state.ur.$status === "succeeded") {
    const user = state.ur;
  
    
    idUtil.add(user.idBoards, board.id);
  

    state.bd.addOne({
      id: board.id,
      title: board.title,
      theme: board.theme,
      idUser: user.id,
      idLists: [],
      idLabels: [],
      isStarred: board.isStarred,
      dateLastView: board.dateLastView,
    });
  
  
    addManyLabels(state, board.labels.map(entity => ({...entity, idBoard: board.id})));
    addManyLists(state, board.lists.map(entity => ({...entity, idBoard: board.id})));
  }
}


export default addOneBoard;