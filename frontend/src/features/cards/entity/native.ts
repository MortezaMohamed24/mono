import {OID} from "/util/checker";
import {ARRAY} from "/util/checker";
import {title} from "../fields/formatters";
import {OBJECT} from "/util/checker";
import CardBase from "./base";
import {dateDue} from "../fields/formatters";
import {WithError} from "/util/checker";
import {dateStart} from "../fields/formatters";
import {isWatched} from "../fields/formatters";
import {isComplete} from "../fields/formatters";
import {description} from "../fields/formatters";
import {dateCreation} from "../fields/formatters";


/** 
 * A card as stored in the state
*/
export type CardNative = Pick<CardBase, 
  | "id"
  | "title"
  | "idUser"
  | "idList"
  | "dateDue"
  | "idBoard"
  | "idLabels"
  | "dateStart"
  | "isWatched"
  | "isComplete"
  | "description"
  | "dateCreation"
  | "idChecklists"
>


export const formatAsCardNative = OBJECT<CardNative>({
  id: OID(),
  title: title,
  idUser: OID(),
  idList: OID(),
  idBoard: OID(),
  dateDue: dateDue,
  idLabels: ARRAY([OID()]),
  dateStart: dateStart,
  isWatched: isWatched,
  isComplete: isComplete,
  description: description,
  dateCreation: dateCreation,
  idChecklists: ARRAY([OID()]),
});


export const formatAsCardNativeStrictly = WithError(formatAsCardNative, () => (
  new TypeError("invalid native card")
));


export default Object.freeze({
  format: formatAsCardNative,
  formatStrictly: formatAsCardNativeStrictly,
});