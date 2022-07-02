import {Oid} from "#util/oid";
import Board from "src/models/board";


interface BoardCreateActionBody {
  /** The id for the board to create */
  readonly id?: Oid | undefined;
  /** The title of the board to create. */
  readonly title: Board["title"]; 
  /** The theme of the board to create. */
  readonly theme: Board["theme"];
}


export default BoardCreateActionBody;