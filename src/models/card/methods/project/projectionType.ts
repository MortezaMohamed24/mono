import Card from "src/models/card";
import {Oid} from "#util/oid";
import {CheckitemProjectionType} from "src/models/checkitem/methods/project";
import {ChecklistProjectionType} from "src/models/checklist/methods/project";


export interface CardProjectionType {
  id?: Oid;
  url?: Card["url"];
  title?: Card["title"];
  idUser?: Card["idUser"];
  idList?: Card["idList"];
  idBoard?: Card["idBoard"];
  dateDue?: Card["dateDue"];
  idLabels?: Card["idLabels"];
  dateStart?: Card["dateStart"];
  isWatched?: Card["isWatched"];
  isComplete?: Card["isComplete"];
  checklists?: ChecklistProjectionType[];
  checkitems?: CheckitemProjectionType[];
  description?: Card["description"];
  idChecklists?: Card["idChecklists"];
  dateCreation?: Card["dateCreation"];
  dateLastView?: Card["dateLastView"];
}


export default CardProjectionType;