import List from "src/models/list";
import {CardProjectionType} from "src/models/card/methods/project";
import {ChecklistProjectionType} from "src/models/checklist/methods/project";
import {CheckitemProjectionType} from "src/models/checkitem/methods/project";


export interface ListProjectionType {
  id?: List["id"];
  title?: List["title"];
  cards?: CardProjectionType[];
  idUser?: List["idUser"];
  idCards?: List["idCards"];
  idBoard?: List["idBoard"];
  isWatched?: List["isWatched"];
  sortMethod?: List["sortMethod"];
  checklists?: ChecklistProjectionType[];
  checkitems?: CheckitemProjectionType[];
}


export default ListProjectionType;