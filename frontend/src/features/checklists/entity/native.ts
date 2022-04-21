import {OID} from "/util/checker";
import {ARRAY} from "/util/checker";
import {title} from "../fields/formatters";
import {filter} from "../fields/formatters";
import {OBJECT} from "/util/checker";
import {WithError} from "/util/checker";
import ChecklistBase from "./base";
import CHECKITEM from "/checkitems/entity";


/**
 * A checklist as stored in the state
*/
export type ChecklistNative = Pick<ChecklistBase, 
  | "id" 
  | "title" 
  | "filter" 
  | "idUser" 
  | "idList" 
  | "idCard" 
  | "idBoard" 
  | "idCheckitems"
>


export const formatAsChecklistNative = OBJECT<ChecklistNative>({
  id: OID(),
  title: title,
  filter: filter,
  idUser: OID(),
  idList: OID(),
  idCard: OID(),
  idBoard: OID(),
  checkitems: ARRAY([CHECKITEM.rawNested.format]),
});


export const formatAsChecklistNativeStrictly = WithError(formatAsChecklistNative, () => {
  new Error("invalid native checklist");
});


export default Object.freeze({
  format: formatAsChecklistNative,
  formatStrictly: formatAsChecklistNativeStrictly,
});