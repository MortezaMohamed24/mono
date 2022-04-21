import {OID} from "/util/formatter";
import {ARRAY} from "/util/formatter";
import {title} from "../fields/formatters";
import {filter} from "../fields/formatters";
<<<<<<< HEAD
import {OBJECT} from "/util/checker";
import CHECKITEM from "/checkitems/entity";
=======
import {OBJECT} from "/util/formatter";
>>>>>>> useTheNewVersionOfFormatter
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

<<<<<<< HEAD

export const format = OBJECT<ChecklistRawNested>({
  id: OID(),
  title: title,
  filter: filter,
  checkitems: ARRAY([CHECKITEM.rawNested]),
});


export default format;
=======
export const formatAsChecklistRawNested = OBJECT({
  id: OID(),
  title: title,
  filter: filter,
  checkitems: ARRAY([formatAsCheckitemRawNested]),
}, {
  name: "ChecklistRawNested",
});


export default formatAsChecklistRawNested;
>>>>>>> useTheNewVersionOfFormatter
