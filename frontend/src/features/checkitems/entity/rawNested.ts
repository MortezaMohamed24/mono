import {OID} from "/util/formatter";
import {OBJECT} from "/util/formatter";
import {content} from "../fields/formatters";
import {isComplete} from "../fields/formatters";
import {CheckitemBase} from "./base";


/**
 * A checkitem as recived nested in a checklist from the server
*/
export type CheckitemRawNested = Pick<CheckitemBase, 
  | "id" 
  | "content" 
  | "isComplete"
>


export const formatAsCheckitemRawNested = OBJECT({
  name: "CheckitemRawNestedEntity",
  content: {    
    id: OID({name: "CheckitemRawNestedEntity/Id"}),
    content: content.copy({name: "CheckitemRawNestedEntity/content"}),
    isComplete: isComplete.copy({name: "CheckitemRawNestedEntity/IsComplete"}),
  },
});


export default formatAsCheckitemRawNested;