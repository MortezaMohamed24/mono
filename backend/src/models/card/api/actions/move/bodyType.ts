import {Oid} from "#util/oid";


interface CardMoveRequestBody {
  /** The id of the card to move. */
  readonly idCard: Oid; 
  /** The id of the list to move card to. */
  readonly idList: Oid;
  /** The index where card should be in target list. */
  readonly index: number;
}


export default CardMoveRequestBody;