import {Oid} from "#util/oid";


interface CardCreateActionBody {
  /** The id for the card to create */
  readonly id?: Oid | undefined;
  /** The id of the list for which to create a card. */
  readonly idList: Oid;
  /** The title of the card to create. */
  readonly title: string;
  /** The ids of the labels that should be added to the card to create. */
  readonly idLabels: Oid[];
  /** The description of the card to create. */
  readonly description: string | null;
}


export default CardCreateActionBody;