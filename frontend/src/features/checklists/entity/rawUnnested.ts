import {OID} from "/util/checker";
import {ARRAY} from "/util/checker";
import {title} from "../fields/formatters";
import {filter} from "../fields/formatters";
import {OBJECT} from "/util/checker";
import {WithError} from "/util/checker";
import ChecklistBase from "./base";
import CHECKITEM from "/checkitems/entity";


/** 
 * A checklist as recieved unested from the server
*/
export type ChecklistRawUnnested = Pick<ChecklistBase, 
  | "id" 
  | "title" 
  | "filter" 
  | "idCard" 
  | "checkitems"
>


export const format = OBJECT<ChecklistRawUnnested>({
  id: OID(),
  title: title,
  idCard: OID(),
  filter: filter,
  checkitems: ARRAY([CHECKITEM.rawNested]),
});


export default format;