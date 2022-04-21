import Argument from "./argument.js";
import Checklist from "#models/checklist";


async function copy(this: Checklist, {card, title = this.title, index = Infinity}: Argument) {
  const copy = await this.copySelf({card, title, index});

  await this.copyOwnCheckitems(copy);

  return copy;
}


export default copy;