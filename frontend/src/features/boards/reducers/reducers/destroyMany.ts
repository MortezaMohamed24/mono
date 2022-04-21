import {State} from "/store";
import destroyOneBoard from "./destroyOne";


function destroyManyBoards(state: State, {idBoards}: {idBoards: string[]}) {
  for (let idBoard of idBoards) {
    destroyOneBoard(state, {idBoard})
  }
}


export default destroyManyBoards;