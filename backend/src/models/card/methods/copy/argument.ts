import List from "#models/list";


interface CardMethodsCopyArgument {
  list: List;
  title?: string | undefined;
  index?: number | undefined;
  keepDates?: boolean | undefined;
  keepLabels?: boolean | undefined;
  keepChecklists?: boolean | undefined;
}


export default CardMethodsCopyArgument;