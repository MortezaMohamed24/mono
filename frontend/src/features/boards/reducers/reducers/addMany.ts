import {State} from "/store";
import addOneBoard from "./addOne";
import {BoardRawUnnested} from "/boards/entity/rawUnnested";


function addManyBoards(state: State, boards: BoardRawUnnested[]) {
  for (let entity of boards) {
    addOneBoard(state, entity);
  }
}


export default addManyBoards;