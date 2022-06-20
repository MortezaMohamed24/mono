import BodyType from "./bodyType.js";
import Checklist from "src/models/checklist";
import Checkitem from "src/models/checkitem";
import ReturnType from "./returnType.js";


interface CheckitemMoveActionConfig {
  body: BodyType;
  query: undefined;
  return: ReturnType;
  locals: {
    /** The checkitem to move */
    checkitem: Checkitem;
    /** The owner checklist of `this.checkitem` in which the checkitem shoukd be moved */
    checklist: Checklist;
  };
  authorized: true;
}


export default CheckitemMoveActionConfig;