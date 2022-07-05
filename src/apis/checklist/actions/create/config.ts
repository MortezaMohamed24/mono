import Card from "src/Card";
import BodyType from "./bodyType.js";
import Checklist from "src/models/checklist/Checklist";
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