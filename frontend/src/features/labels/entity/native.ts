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


export default LabelNative;