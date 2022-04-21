import {OID} from "/util/checker";
import {name} from "../fields";
import {color} from "../fields";
import {OBJECT} from "/util/checker";
import LabelBase from "./base";
import {WithError} from "/util/checker";

     
/** 
 * A label as stored in the state
 */ 
export type LabelNative = Pick<LabelBase, 
  | "id" 
  | "name" 
  | "color" 
  | "idUser" 
  | "idBoard"
>


export const formatAsLablNative = OBJECT<LabelNative>({
  id: OID(),
  name: name,
  color: color,
  idUser: OID(),
  idBoard: OID(),
});


export const formatAsLablNativeStrictly = WithError(formatAsLablNative, () => (
  new TypeError("invalid label native")
));


export default Object.freeze({
  format: formatAsLablNative,
  formatStrictly: formatAsLablNativeStrictly,
});