import {Oid} from "#util/oid";
import Checklist from "#models/checklist";
import {CheckitemProjectionType} from "#models/checkitem/methods/project";


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