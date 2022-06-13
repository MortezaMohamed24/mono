import {OID} from "/util/formatter";
import {title} from "../fields";
import {ARRAY} from "/util/formatter";
import {OBJECT} from "/util/formatter";
import ListBase from "./base";
import {isWatched} from "../fields";
import {sortMethod} from "../fields";
import {formatAsCardRawNested} from "/features/cards/entity";


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

export const formatAsListRawNested = OBJECT({
  id: OID(),
  title: title,
  cards: ARRAY([formatAsCardRawNested]),
  isWatched: isWatched,
  sortMethod: sortMethod,
}, {
  name: "ListRawNested",
});


export default formatAsListRawNested;