import Key from "#models/board/document/documentKey";
import {ListProjectorType} from "#models/list/methods/project";
import {CardProjectorType} from "#models/card/methods/project";
import {LabelProjectorType} from "#models/label/methods/project";
import {ChecklistProjectorType} from "#models/checklist/methods/project";
import {CheckitemProjectorType} from "#models/checkitem/methods/project";


export interface BoardProjectorType {
  keys: Key[],
  lists?: ListProjectorType;
  cards?: CardProjectorType;
  labels?: LabelProjectorType;
  checklists?: ChecklistProjectorType;
  checkitems?: CheckitemProjectorType;
}


export default BoardProjectorType;