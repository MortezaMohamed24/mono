import editBoard from "./reducers/edit";
import addOneBoard from "./reducers/addOne";
import addManyBoards from "./reducers/addMany";
import destroyOneBoard from "./reducers/destroyOne";
import destroyManyBoards from "./reducers/destroyMany";


export {
  editBoard,
  addOneBoard,
  addManyBoards,
  destroyOneBoard,
  destroyManyBoards,
}


export default Object.freeze({
  editBoard,
  addOneBoard,
  addManyBoards,
  destroyOneBoard,
  destroyManyBoards,
})