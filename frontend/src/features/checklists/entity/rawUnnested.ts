import {OID} from "/util/formatter";
import {ARRAY} from "/util/formatter";
import {title} from "../fields/formatters";
import {filter} from "../fields/formatters";
import {OBJECT} from "/util/formatter";
import ChecklistBase from "./base";
import {formatAsCheckitemRawUnnested} from "/checkitems/entity";


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


<<<<<<< HEAD
export const format = OBJECT<ChecklistRawUnnested>({
=======
export const formatAsChecklistRawUnnested = OBJECT({
>>>>>>> useTheNewVersionOfFormatter
  id: OID(),
  title: title,
  idCard: OID(),
  filter: filter,
<<<<<<< HEAD
  checkitems: ARRAY([CHECKITEM.rawNested]),
});


export default format;
=======
  checkitems: ARRAY([formatAsCheckitemRawUnnested]),
}, {
  name: "ChecklistRawUnnested",
});


export default formatAsCheckitemRawUnnested;
>>>>>>> useTheNewVersionOfFormatter
