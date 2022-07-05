import BodyType from "./bodyType.js";
import Checklist from "src/models/checklist/Checklist";
import ReturnType from "./returnType.js";


interface ChecklistDestroyRequestConfig {
  body: BodyType;
  query: undefined;
  return: ReturnType;
  locals: {
    /** The checklist to destroy */
    checklist: Checklist;
  };
  authorized: true;
}


export default ChecklistDestroyRequestConfig;