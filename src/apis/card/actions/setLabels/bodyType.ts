import {Oid} from "#util/oid";


interface CardSetLabelsActionBody {
  /** The of of the card whose labels are to set. */
  readonly idCard: Oid;
  /** The ids of the labels that should be set to card. */
  readonly idLabels: Oid[];
}


export default CardSetLabelsActionBody;