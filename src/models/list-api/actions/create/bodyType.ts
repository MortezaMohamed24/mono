import List from "src/models/list";
import {Oid} from "#util/oid";


interface ListCreateActionBody {
  readonly id?: Oid | undefined;
  /** The title of the list to create. */
  readonly title: List["title"];
  /** The id of the board for which to create a list. */
  readonly idBoard: Oid; 
}


export default ListCreateActionBody;