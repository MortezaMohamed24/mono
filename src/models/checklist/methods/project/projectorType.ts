import {ChecklistDocumentKey} from "src/models/checklist/document";
import {CheckitemProjectorType} from "src/models/checkitem/methods/project";


export interface ChecklistProjectorType {
  keys: ChecklistDocumentKey[];
  checkitems?: CheckitemProjectorType,
}


export default ChecklistProjectorType;