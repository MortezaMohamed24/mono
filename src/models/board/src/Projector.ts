import Key from "src/models/board/document/documentKey";
import {ListProjectorType} from "src/models/list/methods/project";
import {CardProjectorType} from "src/models/card/methods/project";
import {LabelProjectorType} from "src/models/label/methods/project";
import {ChecklistProjectorType} from "src/models/checklist/methods/project";
import {CheckitemProjectorType} from "src/models/checkitem/methods/project";


export interface BoardProjectorType {
  keys: Key[],
  lists?: ListProjectorType;
  cards?: CardProjectorType;
  labels?: LabelProjectorType;
  checklists?: ChecklistProjectorType;
  checkitems?: CheckitemProjectorType;
}


export default BoardProjectorType;