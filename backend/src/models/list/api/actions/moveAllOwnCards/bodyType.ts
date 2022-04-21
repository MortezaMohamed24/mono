import {Oid} from "#util/oid";


interface ListMoveAllOwnCardsActionBody {
  /** The id of the list whose own cards are to move. */
  readonly idListA: Oid; 
  /** The id of the list into which to move `this.idListA`'s own cards */
  readonly idListB: Oid;
}


export default ListMoveAllOwnCardsActionBody;