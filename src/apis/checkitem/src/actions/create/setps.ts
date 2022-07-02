import {} from "express"

import BodyType from "./bodyType.js";
import Checkitem from "src/models/checkitem";
import Checklist from "src/models/checklist";
import ReturnType from "./returnType.js";


type Stop0 = 
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