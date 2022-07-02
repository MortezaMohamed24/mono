import {Oid} from "#util/oid";


interface ListDestroyActionBody {
  /** The id of the list to destroy along with its relevant data. */
  readonly idList: Oid;
}


export default ListDestroyActionBody;