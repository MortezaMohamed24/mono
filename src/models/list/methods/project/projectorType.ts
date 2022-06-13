import {ListDocumentKey} from "src/models/list/document";
import {CardProjectorType} from "src/models/card/methods/project";
import {ChecklistProjectorType} from "src/models/checklist/methods/project";
import {CheckitemProjectorType} from "src/models/checkitem/methods/project";


export interface ListProjectorType {
  keys: ListDocumentKey[];
  cards?: CardProjectorType;
  checklists?: ChecklistProjectorType;
  checkitems?: CheckitemProjectorType;
}


export default ListProjectorType;