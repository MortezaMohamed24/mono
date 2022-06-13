import {Oid} from "#util/oid";
import Checklist from "src/models/checklist";
import {CheckitemProjectionType} from "src/models/checkitem/methods/project";


export interface ChecklistProjectionType {
  id?: Oid;
  title?: Checklist["title"];
  filter?: Checklist["filter"]; 
  idUser?: Oid;
  idList?: Oid;
  idCard?: Oid;
  idBoard?: Oid;
  checkitems?: CheckitemProjectionType[];
}


export default ChecklistProjectionType;