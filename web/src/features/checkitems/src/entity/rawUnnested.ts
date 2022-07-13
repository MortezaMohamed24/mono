import {OID} from "/util/formatter";
import {OBJECT} from "/util/formatter";
import {content} from "../fields/formatters";
import {isComplete} from "../fields/formatters";
import {CheckitemBase} from "./base";


/**
 * A checkitem as recieved unnested from the server
*/
export type CheckitemRawUnnested = Pick<CheckitemBase, 
  | "id" 
  | "content" 
  | "isComplete" 
  | "idChecklist"
>

export const formatAsCheckitemRawUnnested = OBJECT({
  id: OID(),
  content: content,
  idCheckist: OID(),
  isComplete: isComplete,  
}, {
  name: "CheckitemRawUnnestedEntity",
});



export default formatAsCheckitemRawUnnested;