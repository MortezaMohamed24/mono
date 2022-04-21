import {Oid} from "#util/oid";
import Checklist from "#models/checklist";


interface ChecklistCreateRequestBody {
  /** The id for the checklist to create */
  readonly id?: Oid | undefined;
  /** The title of the checklist to create. */
  readonly title: Checklist["title"],
  /** The id of the card for which to create a checklist. */
  readonly idCard: Oid, 
}


export default ChecklistCreateRequestBody;