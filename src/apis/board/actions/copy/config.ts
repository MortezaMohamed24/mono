import User from "src/models/user";
import Board from "src/models/board";
import BodyType from "./bodyType.js";
import ReturnType from "./returnType.js";


interface BoardCopyActionConfig {
  body: BodyType;
  query: undefined;
  return: ReturnType;
  locals: {
    /** The board to copy */
    board: Board;
    /** The copy made of `this.board` */
    copy: Board;
    /** The user that is meant to own `this.copy`. This is the user making the copy request. */
    user: User;
  };
  authorized: true;
}


export default BoardCopyActionConfig;