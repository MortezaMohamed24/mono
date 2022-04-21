import List from "#models/list";
import Argument from "./argument.js";


async function copy(this: List, {
  board,
  title = this.title, 
  index = Infinity,
  keepCards = true, 
}: Argument) {
  const copy = await this.copySelf({board, title, index});

  if (keepCards) {
    await this.copyAllOwnCards(copy);
  }

  return copy;
}


export default copy;