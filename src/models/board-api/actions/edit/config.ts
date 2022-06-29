import Board from "src/models/board";
import BodyType from "./bodyType.js";
import ReturnType from "./returnType.js";


interface BoardEditActionConfig {
  body: BodyType;
  query: undefined;
  return: ReturnType;
  locals: {
    /** The board to edit */
    board: Board;
  }
  authorized: true;
}

export default BoardEditActionConfig;