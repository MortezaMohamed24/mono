import {Oid} from "#util/oid";


interface LabelDestroyActionBody {
  /** The id of the label to destroy. */
  readonly idLabel: Oid;
}


export default LabelDestroyActionBody;