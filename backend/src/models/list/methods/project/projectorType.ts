import {ListDocumentKey} from "#models/list/document";
import {CardProjectorType} from "#models/card/methods/project";
import {ChecklistProjectorType} from "#models/checklist/methods/project";
import {CheckitemProjectorType} from "#models/checkitem/methods/project";


export interface ListProjectorType {
  keys: ListDocumentKey[];
  cards?: CardProjectorType;
  checklists?: ChecklistProjectorType;
  checkitems?: CheckitemProjectorType;
}


export default ListProjectorType;