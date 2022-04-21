import {OID} from "/util/formatter";
import {name} from "../fields";
import {color} from "../fields";
import {OBJECT} from "/util/formatter";
import LabelBase from "./base";


/** 
 * A label revieved unnested from the server
 */ 
export type LabelRawUnnested = Pick<LabelBase, 
  | "id" 
  | "name" 
  | "color" 
  | "idBoard"
>

export const formatAsLabelRawUnnested = OBJECT({
  id: OID(),
  name: name,
  color: color,
  idBoard: OID(),
}, {
  name: "LabelRawUnnested",
});


export default formatAsLabelRawUnnested;