import {OID} from "/util/formatter";
import {ARRAY} from "/util/formatter";
import {title} from "../fields";
import {OBJECT} from "/util/formatter";
import {ListBase} from "./base";
import {isWatched} from "../fields";
import {sortMethod} from "../fields";
import {formatAsCardRawNested} from "/cards/entity";


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
  cards: ARRAY([formatAsCardRawNested]),
  idBoard: OID(),
  isWatched: isWatched,
  sortMethod: sortMethod,
});


export default formatAsListRawUnnested;