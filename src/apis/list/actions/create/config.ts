import List from "src/models/list/List";
import Board from "src/models/board/board";
import BodyType from "./bodyType.js";
import ReturnType from "./returnType.js";


interface ListCreateActionConfig {
  body: BodyType;
  query: undefined;
  return: ReturnType;
  locals: {
    /** The newly created list */
    list: List;
    /** The board for which to create a list */
    board: Board;
  };
  authorized: true;
}


export default ListCreateActionConfig;