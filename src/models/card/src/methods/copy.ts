import Card from "src/models/card";
import Argument from "./argument.js";

import List from "src/models/list";


interface CardMethodsCopyArgument {
  list: List;
  title?: string | undefined;
  index?: number | undefined;
  keepDates?: boolean | undefined;
  keepLabels?: boolean | undefined;
  keepChecklists?: boolean | undefined;
}


export default CardMethodsCopyArgument;
async function copy(this: Card, {
  list,
  title = this.title,
  index = Infinity,
  keepDates = true, 
  keepLabels = true, 
  keepChecklists = true,
}: Argument) {
  const copy = await this.copySelf({list, title, index, keepDates, keepLabels});

  if (keepChecklists) {
    await this.copyOwnChecklists(copy);
  }
  
  return copy;
}


export default copy;