import List from "src/models/list/List";
import {Oid} from "#util/oid";


interface ListCopyActionBody {
  /** The id of the list to copy. */
  readonly idList: Oid; 
  /** The board into which to copy list. */
  readonly idBoard: Oid; 
  /** The title for the copy. Defaults to the original list's title. */
  readonly title?: List["title"] | undefined;
}


export default ListCopyActionBody;