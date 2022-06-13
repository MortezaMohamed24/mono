import {Oid} from "#util/oid";
import {LabelProjectorType} from "src/models/label/methods/project";


interface LabelProjectActionQuery {
  /** The id of the label to project */
  readonly idLabel: Oid;
  /** The projector to use to project the label specified by `this.idLabel` */
  readonly projector: LabelProjectorType;
}


export default LabelProjectActionQuery;