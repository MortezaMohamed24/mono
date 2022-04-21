import List from "#models/list/model";


interface CardMethodsCopySelfArgument {
  /** The list into which to copy the card */
  list: List;
  title?: string | undefined;
  index?: number | undefined;
  keepDates?: boolean | undefined;
  keepLabels?: boolean | undefined;
}


export default CardMethodsCopySelfArgument;