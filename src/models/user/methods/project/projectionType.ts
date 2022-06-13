import User from "src/models/user";
import {ListProjectionType} from "src/models/list/methods/project";
import {CardProjectionType} from "src/models/card/methods/project";
import {BoardProjectionType} from "src/models/board/methods/project";
import {LabelProjectionType} from "src/models/label/methods/project";
import {ChecklistProjectionType} from "src/models/checklist/methods/project";
import {CheckitemProjectionType} from "src/models/checkitem/methods/project";


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