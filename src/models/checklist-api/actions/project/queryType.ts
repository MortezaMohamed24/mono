import {Oid} from "#util/oid";
import {ChecklistProjectorType} from "src/models/checklist/methods/project";


interface ChecklistProjectRequestBody {
  /** The projector passed to the `project()` method of the checklist specified by `this.idChecklist` */
  readonly projector: ChecklistProjectorType;
  /** The id of the checklist to project */
  readonly idChecklist: Oid;
}


export default ChecklistProjectRequestBody;