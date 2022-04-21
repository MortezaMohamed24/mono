import {Oid} from "#util/oid";


interface CheckitemDestroyRequestBody {
  /** The id  of the checkitem to destroy. */
  readonly idCheckitem: Oid;
}


export default CheckitemDestroyRequestBody;