import {Oid} from "#util/oid";
import Checklist from "#models/checklist";


interface ChecklistEditRequestBody {
  /** The new title for checklist. */
  readonly title?: Checklist["title"],
  /** The new visibility filter for checklist. */
  readonly filter?: Checklist["filter"],
  /** The id of the checklist to edit.*/
  readonly idChecklist: Oid, 
}


export default ChecklistEditRequestBody;