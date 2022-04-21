import Board from "#models/board";
import QueryType from "./queryType.js";
import ReturnType from "./returnType.js";


interface BoardProjectActionConfig {
  body: undefined;
  query: QueryType;
  return: ReturnType;
  locals: {
    /** The board to project */
    board: Board;
  }
  authorized: true;
}

export default BoardProjectActionConfig;