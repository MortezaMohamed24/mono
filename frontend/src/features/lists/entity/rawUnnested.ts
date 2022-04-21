import card from "/cards/entity";
import {OID} from "/util/checker";
import {ARRAY} from "/util/checker";
import {title} from "../fields";
import {OBJECT} from "/util/checker";
import {ListBase} from "./base";
import {WithError} from "/util/checker";
import {isWatched} from "../fields";
import {sortMethod} from "../fields";


/**
 * A list sa recieved unnested frmo the server
 */
export type ListRawUnnested = Pick<ListBase, 
  | "id" 
  | "title" 
  | "cards" 
  | "idBoard" 
  | "isWatched" 
  | "sortMethod"
>


export const formatAsListRawUnnested = OBJECT<ListRawUnnested>({
  id: OID(),
  title: title,
  cards: ARRAY([card.rawNested.format]),
  idBoard: OID(),
  isWatched: isWatched,
  sortMethod: sortMethod,
});


export const formatAsListRawUnnestedStrictly = WithError(formatAsListRawUnnested, () => (
  new TypeError("invalid raw unnested list")
));


export default Object.freeze({
  format: formatAsListRawUnnested,
  formatStrictly: formatAsListRawUnnestedStrictly,
});