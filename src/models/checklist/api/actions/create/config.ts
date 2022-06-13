import Card from "src/models/card";
import BodyType from "./bodyType.js";
import Checklist from "src/models/checklist";
import ReturnType from "./returnType.js";


interface ChecklistCreateRequestConfig {
  body: BodyType;
  query: undefined;
  return: ReturnType;
  locals: {
    /** The card for which to create a checklist */
    card: Card;
    /** The created checklist along with its checkitems */  
    return: ReturnType;
    /** The created checklist */
    checklist: Checklist;
  };
  authorized: true;
}


export default ChecklistCreateRequestConfig;