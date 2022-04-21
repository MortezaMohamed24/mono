import {Oid} from "#util/oid";
import Board from "#models/board";


interface BoardCopyRequestBody {
  /** The id of the board to copy. */
  readonly idBoard: Oid;
  /** The title of the new board. Defaults to this board's title. */
  readonly title: Board["title"];
  /** Whether to copy own cards as well. */
  readonly keepCards?: boolean | undefined;
}


export default BoardCopyRequestBody;