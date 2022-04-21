import User from "#models/user";
import Board from "#models/board";
import BodyType from "./bodyType.js";
import ReturnType from "./returnType.js";


interface BoardCopyActionConfig {
  body: BodyType;
  query: undefined;
  return: ReturnType;
  locals: {
    /** The user for which to create a board. This is the same user making the create request. */
    user: User;
    /** The created board */
    board: Board;
  };
  authorized: true;
}


export default BoardCopyActionConfig;