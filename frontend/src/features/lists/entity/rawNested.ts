import card from "/cards/entity";
import {OID} from "/util/checker";
import {title} from "../fields";
import {ARRAY} from "/util/checker";
import {OBJECT} from "/util/checker";
import ListBase from "./base";
import {isWatched} from "../fields";
import {WithError} from "/util/checker";
import {sortMethod} from "../fields";


/** 
 * A list as recived nested in a board from the server
*/
export type ListRawNested = Pick<ListBase, 
  | "id" 
  | "title" 
  | "cards" 
  | "isWatched" 
  | "sortMethod"
>


export const formatAsListRawNested = OBJECT<ListRawNested>({
  id: OID(),
  title: title,
  cards: ARRAY([card.rawNested.format]),
  isWatched: isWatched,
  sortMethod: sortMethod,
});


export const formatAsListRawNestedStrictly = WithError(OBJECT<ListRawNested>({
  id: OID(),
  title: title,
  cards: ARRAY([card.rawNested.formatStrictly]),
  isWatched: isWatched,
  sortMethod: sortMethod,
}), () => (
  new TypeError("invalid raw nested list")
));


export default Object.freeze({
  format: formatAsListRawNested,
  formatStrictly: formatAsListRawNestedStrictly,
});