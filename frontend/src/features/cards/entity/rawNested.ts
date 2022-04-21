import {OID} from "/util/checker";
import {ARRAY} from "/util/checker";
import {title} from "../fields/formatters";
import CardBase from "./base";
import {OBJECT} from "/util/checker";
import CHECKLIST from "/checklists/entity";
import {dateDue} from "../fields/formatters";
import {dateStart} from "../fields/formatters";
import {WithError} from "/util/checker";
import {isWatched} from "../fields/formatters";
import {isComplete} from "../fields/formatters";
import {description} from "../fields/formatters";
import {dateCreation} from "../fields/formatters";


export type CardRawNested = Pick<CardBase, 
  | "id" 
  | "title" 
  | "dateDue" 
  | "idLabels" 
  | "dateStart" 
  | "checklists" 
  | "isWatched"
  | "isComplete" 
  | "description" 
  | "dateCreation"
>

export const formatAsCardRawNested = OBJECT<CardRawNested>({
  id: OID(),
  title: title,
  dateDue: dateDue,
  idLabels: ARRAY([OID()]),
  dateStart: dateStart,
  isWatched: isWatched,
  checklists: ARRAY([CHECKLIST.rawNested.format]),
  isComplete: isComplete,
  description: description,
  dateCreation: dateCreation,
});


export const formatAsCardRawNestedStrictly = WithError(OBJECT<CardRawNested>({
  id: OID(),
  title: title,
  dateDue: dateDue,
  idLabels: ARRAY([OID()]),
  dateStart: dateStart,
  isWatched: isWatched,
  checklists: ARRAY([CHECKLIST.rawNested.formatStrictly]),
  isComplete: isComplete,
  description: description,
  dateCreation: dateCreation,
}), () => (
  new TypeError("invalid raw nested card")
));


export default Object.freeze({
  format: formatAsCardRawNested,
  formatStrictly: formatAsCardRawNestedStrictly,
});