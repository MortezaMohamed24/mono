import {Oid} from "#util/oid";
import {ListProjectorType} from "src/models/list/methods/project";


interface ListProjectActionPayload {
  /** The id of the checklist to project */
  readonly idList: Oid;
  /** The projector used to project the list specified by `this.idList` */
  readonly projector: ListProjectorType;
}


export default ListProjectActionPayload;