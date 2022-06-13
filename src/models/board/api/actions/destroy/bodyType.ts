import {Oid} from "#util/oid";


interface BoardDestroyActionBody {
  /** The id of the board to delete along with all its relevant data. */
  readonly idBoard: Oid;
}


export default BoardDestroyActionBody;