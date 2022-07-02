import {Oid} from "#util/oid";
import {BoardProjectorType} from "src/models/board/methods/project";


interface BoardProjectActionQuery {
  /** The id of the board to project */
  readonly idBoard: Oid;
  /** The projector used to project the board specified by `this.idBoard` */
  readonly projector: BoardProjectorType;
}


export default BoardProjectActionQuery;