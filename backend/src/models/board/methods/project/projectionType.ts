import Board from "#models/board";
import {ListProjectionType} from "#models/list/methods/project";
import {CardProjectionType} from "#models/card/methods/project";
import {LabelProjectionType} from "#models/label/methods/project";
import {ChecklistProjectionType} from "#models/checklist/methods/project";
import {CheckitemProjectionType} from "#models/checkitem/methods/project";


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