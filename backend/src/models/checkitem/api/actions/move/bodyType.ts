import {Oid} from "#util/oid";


interface CheckitemMoveRequestBody {
  /** The id of the checkitem to move. */
  readonly idCheckitem: Oid;
  /** The id of the checklist to move the checkitem in/into */
  readonly idChecklist: Oid;
  /** The new index in the checklist to move checkitem in/into. */
  readonly index: number;
}


export default CheckitemMoveRequestBody;