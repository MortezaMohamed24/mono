import BodyType from "./bodyType.js";
import Checklist from "#models/checklist";
import Checkitem from "#models/checkitem";
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