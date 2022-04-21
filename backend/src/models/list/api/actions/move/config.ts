import List from "#models/list";
import Board from "#models/board";
import BodyType from "./bodyType.js";
import ReturnType from "./returnType.js";


interface ListMoveActionConfig {
  body: BodyType;
  query: undefined;
  return: ReturnType;
  locals: {
    /** The list to move */
    list: List;
    /** The board in/into which to move `this.list` */
    board: Board;
  };
  authorized: true;
}


export default ListMoveActionConfig;