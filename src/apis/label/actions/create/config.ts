import Board from "src/models/board/board";
import Label from "src/models/label/Label";
import BodyType from "./bodyType.js";
import ReturnType from "./returnType.js";


interface LabelCreateActionConfig {
  body: BodyType;
  query: undefined;
  return: ReturnType;
  locals: {
    /** The board for which to create a label */
    board: Board;
    /** The created label */
    label: Label;
  };
  authorized: true;
}


export default LabelCreateActionConfig;