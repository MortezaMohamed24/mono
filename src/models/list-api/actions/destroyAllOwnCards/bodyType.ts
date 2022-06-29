import {Oid} from "#util/oid";


interface ListDestroyAllOwnCardsActionBody {
  /** The id of the list whose own cards are to destrooy. */
  readonly idList: Oid;
}


export default ListDestroyAllOwnCardsActionBody;