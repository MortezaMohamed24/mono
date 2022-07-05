import List from "src/models/list/List";
import Board from "src/models/board/board";
import BodyType from "./bodyType.js";
import ReturnType from "./returnType.js";


interface ListCopyActionConfig {
  body: BodyType;
  query: undefined;
  return: ReturnType;
  locals: {
    /** The list to copy */
    list: List;
    /** The copy list created of `this.list` */
    copy: List;
    /** The board to place `this.copy` in */
    board: Board;
  };
  authorized: true;
}


export default ListCopyActionConfig;