import {Oid} from "#util/oid";


interface ListCopyAllOwnCardsActionBody {
  /** The id of the list whose own cards are to copy. */
  readonly idListA: Oid; 
  /** The id of the list into which to copy `this.idListA`'s own cards */
  readonly idListB: Oid;
}


export default ListCopyAllOwnCardsActionBody;