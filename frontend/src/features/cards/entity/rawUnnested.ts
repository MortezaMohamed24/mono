import {OID} from "/util/formatter";
import {title} from "../fields/formatters";
import {ARRAY} from "/util/formatter";
import {OBJECT} from "/util/formatter";
import CardBase from "./base";
import {dateDue} from "../fields/formatters";
import {dateStart} from "../fields/formatters";
import {isWatched} from "../fields/formatters";
import {isComplete} from "../fields/formatters";
import {description} from "../fields/formatters";
import {dateCreation} from "../fields/formatters";
import {formatAsChecklistRawNested} from "/features/checklists/entity";


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

export const formatAsCardRawUnnested = OBJECT({
  id: OID(),
  title: title,
  idList: OID(),
  dateDue: dateDue,
  idLabels: ARRAY([OID()]),
  dateStart: dateStart,
  isWatched: isWatched,
  checklists: ARRAY([formatAsChecklistRawNested]),
  isComplete: isComplete,
  description: description,
  dateCreation: dateCreation,
});


export default formatAsCardRawUnnested;