import {OID} from "/util/formatter";
import {ARRAY} from "/util/formatter";
import {title} from "../fields/formatters";
import {filter} from "../fields/formatters";
import {OBJECT} from "/util/formatter";
import ChecklistBase from "./base";
import {formatAsCheckitemRawNested} from "/checkitems/entity";


/** 
 * A checklist as recieved nested in a card from the server
*/
export type ChecklistRawNested = Pick<ChecklistBase, 
  | "id" 
  | "title" 
  | "filter" 
  | "checkitems"
>

export const formatAsChecklistRawNested = OBJECT({
  id: OID(),
  title: title,
  filter: filter,
  checkitems: ARRAY([formatAsCheckitemRawNested]),
}, {
  name: "ChecklistRawNested",
});


export default formatAsChecklistRawNested;