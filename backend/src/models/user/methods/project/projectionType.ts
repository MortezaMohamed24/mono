import User from "#models/user";
import {ListProjectionType} from "#models/list/methods/project";
import {CardProjectionType} from "#models/card/methods/project";
import {BoardProjectionType} from "#models/board/methods/project";
import {LabelProjectionType} from "#models/label/methods/project";
import {ChecklistProjectionType} from "#models/checklist/methods/project";
import {CheckitemProjectionType} from "#models/checkitem/methods/project";


interface UserProjectionType {
  id?: User["id"];
  lists?: ListProjectionType[];
  cards?: CardProjectionType[];
  boards?: BoardProjectionType[];
  labels?: LabelProjectionType[];
  avatar?: User["avatar"];
  idBoards?: User["idBoards"];
  username?: User["username"];
  lastname?: User["lastname"];
  initials?: User["initials"];
  firstname?: User["firstname"];
  checklists?: ChecklistProjectionType[];
  checkitems?: CheckitemProjectionType[];
}


export default UserProjectionType;