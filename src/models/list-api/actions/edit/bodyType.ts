import List from "src/models/list";
import {Oid} from "#util/oid";


interface ListEditActionBody {
  /** The id of the list to edit. */
  readonly idList: Oid;
  /** The new title for list. */
  readonly title?: List["title"] | undefined;
  /** Whether this list can send notifications to relevant users. */
  readonly isWatched?: List["isWatched"] | undefined;
}


export default ListEditActionBody;