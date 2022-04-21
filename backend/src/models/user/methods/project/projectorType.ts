import {UserDocumentKey} from "#models/user/document";
import {ListProjectorType} from "#models/list/methods/project";
import {CardProjectorType} from "#models/card/methods/project";
import {BoardProjectorType} from "#models/board/methods/project";
import {LabelProjectorType} from "#models/label/methods/project";
import {ChecklistProjectorType} from "#models/checklist/methods/project";
import {CheckitemProjectorType} from "#models/checkitem/methods/project";


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