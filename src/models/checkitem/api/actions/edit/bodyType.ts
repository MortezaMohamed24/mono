import {Oid} from "#util/oid";


interface CheckitemEditRequestBody {
  /** The new content for checkitem. */
  readonly content?: string | undefined;
  /** The id of the checkitem to edit. */
  readonly idCheckitem: Oid;
  /** Whether checkitem should be set as complete. */
  readonly isComplete?: boolean | undefined;
}


export default CheckitemEditRequestBody;