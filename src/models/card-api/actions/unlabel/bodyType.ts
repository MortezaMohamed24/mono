import {Oid} from "#util/oid";


interface CardUnlabelActionBody {
  /** The id of the card to remove a label from. */
  readonly idCard: Oid;
  /** * The id of the label to remove from card. */
  readonly idLabel: Oid;
}


export default CardUnlabelActionBody;