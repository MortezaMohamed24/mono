import {Oid} from "#util/oid";


interface CardDestroyActionBody {
  /** The id of the card to destroy. */
  readonly idCard: Oid;
}


export default CardDestroyActionBody;