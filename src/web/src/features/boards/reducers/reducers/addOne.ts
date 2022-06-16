import idUtil from "/util/idUtil";
import {State} from "/store";
import {addManyLists} from "/features/lists/reducers";
import {addManyLabels} from "/features/labels/reducers";
import {BoardRawUnnested} from "/features/boards/entity";


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