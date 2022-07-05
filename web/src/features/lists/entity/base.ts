import {CardRawNested} from "/features/cards/entity/rawNested";
import {DATE_CREATED_ASCENDING} from "../fields";
import {DATE_CREATED_DESCENDING} from "../fields";
import {ALPHABETICALLY_ASCENDING} from "../fields";
import {ALPHABETICALLY_DESCENDING} from "../fields";


/**
 * All fields a list might possibly have
 */
export type ListBase = {
  id: string;
  title: string;
  cards: CardRawNested[];
  idUser: string;
  idBoard: string;
  idCards: string[];
  isWatched: boolean;
  sortMethod: typeof DATE_CREATED_ASCENDING | typeof DATE_CREATED_DESCENDING | typeof ALPHABETICALLY_ASCENDING | typeof ALPHABETICALLY_DESCENDING
}


export default ListBase;