import {ChecklistDocumentKey} from "#models/checklist/document";
import {CheckitemProjectorType} from "#models/checkitem/methods/project";


export interface ChecklistProjectorType {
  keys: ChecklistDocumentKey[];
  checkitems?: CheckitemProjectorType,
}


export default ChecklistProjectorType;