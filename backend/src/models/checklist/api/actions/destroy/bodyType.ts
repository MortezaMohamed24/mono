import {Oid} from "#util/oid";


interface ChecklistDestroyRequestBody {
  /** The id of the checklist to delete. */
  readonly idChecklist: Oid,
}


export default ChecklistDestroyRequestBody;