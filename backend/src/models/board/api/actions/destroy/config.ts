import Board from "#models/board/model";
import BodyType from "./bodyType.js";
import ReturnType from "./returnType.js";


interface BoardDestroyActionConfig {
  body: BodyType;
  query: undefined;
  return: ReturnType;
  locals: {
    /** The board to destroy */
    board: Board;
  };
  authorized: true;
}


export default BoardDestroyActionConfig;