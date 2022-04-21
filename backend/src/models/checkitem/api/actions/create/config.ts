import BodyType from "./bodyType.js";
import Checkitem from "#models/checkitem";
import Checklist from "#models/checklist";
import ReturnType from "./returnType.js";


interface CheckitemCreateActionConfig {
  body: BodyType;
  query: undefined;
  return: ReturnType;
  locals: {
    /** The checklist for which to create a checkitem */
    checklist: Checklist;
    /** The created checkitem */ 
    checkitem: Checkitem;
  };
  authorized: true;
}


export default CheckitemCreateActionConfig;