import {OID} from "/util/checker";
import {name} from "../fields";
import {color} from "../fields";
import {OBJECT} from "/util/checker";
import LabelBase from "./base";
import {WithError} from "/util/checker";


/** 
 * A label revieved unnested from the server
 */ 
export type LabelRawUnnested = Pick<LabelBase, 
  | "id" 
  | "name" 
  | "color" 
  | "idBoard"
>


export const formatAsLabelRawUnnested = OBJECT<LabelRawUnnested>({
  id: OID(),
  name: name,
  color: color,
  idBoard: OID(),
});
 

export const formatAsLabelRawUnnestedStrictly = WithError(formatAsLabelRawUnnested, () => (
  () => new TypeError("invalid raw unnested label")
));


export default Object.freeze({
  format: formatAsLabelRawUnnested,
  formatStrictly: formatAsLabelRawUnnestedStrictly,
});