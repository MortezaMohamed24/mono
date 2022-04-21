import {Oid} from "#util/oid";


interface CardCopyRequestBody {
  /** The id of the card to copy. */
  readonly idCard: Oid;
  /** The id of the list to copy card to. */
  readonly idList: Oid;
  /** The index where card should be copied in the target list. */
  readonly index?: number | undefined;
  /** The copied card's title */
  readonly title?: string | undefined;
  /** Specifies whether to also copy card's dates into the copy. */
  readonly keepDates?: boolean | undefined;
  /** Specifies whether to also copy card's labels into the copy. */
  readonly keepLabels?: boolean | undefined;
  /** Specifies whether to also copy card's checklists into the copy. */
  readonly keepChecklists?: boolean | undefined;
}


export default CardCopyRequestBody;