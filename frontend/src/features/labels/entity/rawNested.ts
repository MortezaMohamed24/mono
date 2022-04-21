import {OID} from "/util/checker";
import {name} from "../fields";
import {color} from "../fields";
import {OBJECT} from "/util/checker";
import LabelBase from "./base";
import {WithError} from "/util/checker";

 
/** 
 * A label revieved nested in a board from the server
 */ 
export type LabelRawNested = Pick<LabelBase, 
  | "id" 
  | "name" 
  | "color"
>


export const formatAsLabelRawNested = OBJECT<LabelRawNested>({
  id: OID(),
  name: name,
  color: color,
});
  

export const formatAsLabelRawNestedStrictly = WithError(formatAsLabelRawNested, () => (
  new TypeError("invalid raw nested label")
));


export default Object.freeze({
  format: formatAsLabelRawNested,
  formatStrictly: formatAsLabelRawNestedStrictly,
});