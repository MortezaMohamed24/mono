import {Oid} from "#util/oid";


interface ListMoveActionBody {
  /** The id of the list to move. */
  readonly idList: Oid; 
  /** The id of the board into which to move list. */
  readonly idBoard: Oid; 
  /** The index where list shuld be in board. */
  readonly index: number;
}


export default ListMoveActionBody;