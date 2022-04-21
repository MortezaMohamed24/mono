import {OID} from "/util/checker";
import {title} from "../fields/formatters";
import {ARRAY} from "/util/checker";
import {OBJECT} from "/util/checker";
import CardBase from "./base";
import {dateDue} from "../fields/formatters";
import CHECKLIST from "/checklists/entity";
import {WithError} from "/util/checker";
import {dateStart} from "../fields/formatters";
import {isWatched} from "../fields/formatters";
import {isComplete} from "../fields/formatters";
import {description} from "../fields/formatters";
import {dateCreation} from "../fields/formatters";


/**
 * A card as recieved unnested from the server
*/
export type CardRawUnnested = Pick<CardBase, 
  | "id" 
  | "title" 
  | "idList" 
  | "dateDue" 
  | "idLabels" 
  | "dateStart" 
  | "checklists" 
  | "isWatched"
  | "isComplete" 
  | "description" 
  | "dateCreation"
>

export const formatAsCardRawUnnested = OBJECT<CardRawUnnested>({
  id: OID(),
  title: title,
  idList: OID(),
  dateDue: dateDue,
  idLabels: ARRAY([OID()]),
  dateStart: dateStart,
  isWatched: isWatched,
  checklists: ARRAY([CHECKLIST.rawNested.format]),
  isComplete: isComplete,
  description: description,
  dateCreation: dateCreation,
});


export const formatAsCardRawUnnestedStrictly = WithError(formatAsCardRawUnnested, () => (
  new TypeError("invalid raw unnested card")
));


export default Object.freeze({
  format: formatAsCardRawUnnested,
  formatStrictly: formatAsCardRawUnnestedStrictly,
});