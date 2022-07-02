import Checklist from "src/models/checklist";
import QueryType from "./queryType.js";
import ReturnType from "./returnType.js";
import {ChecklistProjectionType} from "src/models/checklist/methods/project";


interface ChecklistProjectRequestConfig {
  body: undefined;
  query: QueryType;
  return: ReturnType;
  locals: {
    /** The checklist to project */
    checklist: Checklist; 
    /** The projection of `this.checklist` */
    projection: ChecklistProjectionType;
  };
  authorized: true;
}


export default ChecklistProjectRequestConfig;