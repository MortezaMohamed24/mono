import {Oid} from "#util/oid";


interface CardEditRequestBody {
  /** The id of the card to edit.*/
  readonly idCard: Oid;
  /** The new title for card. */
  readonly title?: string | undefined;
  /** The new due date for card; in milliseconds. */
  readonly dateDue?: number | null | undefined;
  /** The new start date for card; in milliseconds. */
  readonly dateStart?: number | null | undefined;
  /** Whether this card is complete (as a task) */
  readonly isComplete?: boolean | undefined;
  /** The new description for card. */
  readonly description?: string | null | undefined;
}


export default CardEditRequestBody;