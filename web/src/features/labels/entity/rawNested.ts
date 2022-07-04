import {OID} from "/util/formatter";
import {name} from "../fields";
import {color} from "../fields";
import {OBJECT} from "/util/formatter";
import LabelBase from "./base";

 
/** 
 * A label revieved nested in a board from the server
 */ 
export type LabelRawNested = Pick<LabelBase, 
  | "id" 
  | "name" 
  | "color"
>

export const formatAsLabelRawNested = OBJECT({
  id: OID(),
  name: name,
  color: color,
}, {
  name: "LabelRawNested",
});
  

export default formatAsLabelRawNested;