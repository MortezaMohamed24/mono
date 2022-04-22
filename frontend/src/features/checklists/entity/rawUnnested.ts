import {OID} from "/util/formatter";
import {ARRAY} from "/util/formatter";
import {title} from "../fields/formatters";
import {filter} from "../fields/formatters";
import {OBJECT} from "/util/formatter";
import ChecklistBase from "./base";
import {formatAsCheckitemRawUnnested} from "/features/checkitems/entity";


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


export const formatAsChecklistRawUnnested = OBJECT({
  id: OID(),
  title: title,
  idCard: OID(),
  filter: filter,
  checkitems: ARRAY([formatAsCheckitemRawUnnested]),
}, {
  name: "ChecklistRawUnnested",
});


export default formatAsCheckitemRawUnnested;
