import Board from "src/models/board";
import {ListProjectionType} from "src/models/list/methods/project";
import {CardProjectionType} from "src/models/card/methods/project";
import {LabelProjectionType} from "src/models/label/methods/project";
import {ChecklistProjectionType} from "src/models/checklist/methods/project";
import {CheckitemProjectionType} from "src/models/checkitem/methods/project";


interface BoardProjectionType {
  id?: Board["_id"];
  url?: Board["url"],
  title?: Board["title"];
  theme?: Board["theme"];
  lists?: ListProjectionType[];
  cards?: CardProjectionType[];
  idUser?: Board["idUser"];
  labels?: LabelProjectionType[];
  idLists?: Board["idLists"];
  idLabels?: Board["idLabels"];
  isStarred?: Board["isStarred"];
  checklists?: ChecklistProjectionType[];
  checkitems?: CheckitemProjectionType[];
  dateCreation?: Board["dateCreation"];
  dateLastView?: Board["dateLastView"];
  dateLastActivity?: Board["dateLastActivity"];
}


export default BoardProjectionType;