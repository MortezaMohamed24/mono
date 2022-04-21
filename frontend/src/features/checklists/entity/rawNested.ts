import {OID} from "/util/checker";
import {ARRAY} from "/util/checker";
import {title} from "../fields/formatters";
import {filter} from "../fields/formatters";
import {OBJECT} from "/util/checker";
import CHECKITEM from "/checkitems/entity";
import {WithError} from "/util/checker";
import ChecklistBase from "./base";


/** 
 * A checklist as recieved nested in a card from the server
*/
export type ChecklistRawNested = Pick<ChecklistBase, 
  | "id" 
  | "title" 
  | "filter" 
  | "checkitems"
>


export const formatAsChecklistRawNested = OBJECT<ChecklistRawNested>({
  id: OID(),
  title: title,
  filter: filter,
  checkitems: ARRAY([CHECKITEM.rawNested.format]),
});


export const formatAsChecklistRawNestedStrictly = WithError(OBJECT<ChecklistRawNested>({
  id: OID(),
  title: title,
  filter: filter,
  checkitems: ARRAY([CHECKITEM.rawNested.formatStrictly]),
}), () => {
  new TypeError("invalid raw nested checklist")
});


export default Object.freeze({
  format: formatAsChecklistRawNested,
  formatStrictly: formatAsChecklistRawNestedStrictly,
});