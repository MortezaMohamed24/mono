import {Oid} from "#util/oid";
import Board from "src/models/board";


interface BoardEditActionBody {
  /** The id of the board to edit. */
  readonly idBoard: Oid;
  /** The new title for board. */
  readonly title?: Board["title"] | undefined;
  /** The new theme for board. */
  readonly theme?: Board["theme"] | undefined;
  /** Whether board is starred. */
  readonly isStarred?: Board["isStarred"] | undefined;
}


export default BoardEditActionBody;