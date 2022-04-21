import Checklist from "#models/checklist";
import BodyType from "./bodyType.js";


interface ChecklistEditRequestConfig {
  body: BodyType;
  query: undefined;
  return: undefined;
  locals: {
    /** The checklist to edit */
    checklist: Checklist;
  };
  authorized: true;
}


export default ChecklistEditRequestConfig;