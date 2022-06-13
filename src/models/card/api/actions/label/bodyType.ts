import {Oid} from "#util/oid";


interface CardLabelActionBody {
  /** The id of the card to add a label to. */
  readonly idCard: Oid;
  /** The id of the label to add to card; which must belong to the card's parent board. */
  readonly idLabel: Oid;
}


export default CardLabelActionBody;