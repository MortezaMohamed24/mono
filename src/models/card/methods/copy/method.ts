import Card from "src/models/card";
import Argument from "./argument.js";


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