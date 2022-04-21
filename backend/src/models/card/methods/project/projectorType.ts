import {CardDocumentKey} from "#models/card/document";
import {CheckitemProjectorType} from "#models/checkitem/methods/project";
import {ChecklistProjectorType} from "#models/checklist/methods/project";


export interface CardProjectorType {
  keys: CardDocumentKey[];
  checklists?: ChecklistProjectorType;
  checkitems?: CheckitemProjectorType;
}


export default CardProjectorType;