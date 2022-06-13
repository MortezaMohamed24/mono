import {UserDocumentKey} from "src/models/user/document";
import {ListProjectorType} from "src/models/list/methods/project";
import {CardProjectorType} from "src/models/card/methods/project";
import {BoardProjectorType} from "src/models/board/methods/project";
import {LabelProjectorType} from "src/models/label/methods/project";
import {ChecklistProjectorType} from "src/models/checklist/methods/project";
import {CheckitemProjectorType} from "src/models/checkitem/methods/project";


export interface UserProjectorType {
  keys: UserDocumentKey[];
  lists?: ListProjectorType;
  cards?: CardProjectorType;
  boards?: BoardProjectorType;
  labels?: LabelProjectorType;
  checklists?: ChecklistProjectorType;
  checkitems?: CheckitemProjectorType;
}


export default UserProjectorType;