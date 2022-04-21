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
  name: "CheckitemRawUnnestedEntity",
  content: {
    id: OID({name: "CheckitemRawUnnestedEntity/Id"}),
    content: content.copy({name: "CheckitemRawUnnestedEntity/content"}),
    idCheckist: OID({name: "CheckitemRawUnnestedEntity/IdChecklist"}),
    isComplete: isComplete.copy({name: "CheckitemRawUnnestedEntity/IsComplete"}),  
  }
});



export default formatAsCheckitemRawUnnested;