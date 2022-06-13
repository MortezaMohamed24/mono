import {CardDocumentKey} from "src/models/card/document";
import {CheckitemProjectorType} from "src/models/checkitem/methods/project";
import {ChecklistProjectorType} from "src/models/checklist/methods/project";


export interface CardProjectorType {
  keys: CardDocumentKey[];
  checklists?: ChecklistProjectorType;
  checkitems?: CheckitemProjectorType;
}


export default CardProjectorType;