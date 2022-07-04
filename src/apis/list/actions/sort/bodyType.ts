import List from "src/models/list/List";
import {Oid} from "#util/oid";


interface ListSortActionBody {
  /** The id of the list whose sort method is to set. */
  readonly idList: Oid; 
  /** The new sort method for list. */
  readonly method: List["sortMethod"];
}


export default ListSortActionBody;