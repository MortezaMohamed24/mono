import v from "src/models/checklist/fields/validators";
import Argument from "./argument.js";
import Checklist from "src/models/checklist";


async function copySelf(this: Checklist, {card, title = this.title, index = Infinity}: Argument) {

  const copy = new Checklist({
    title: v.title(title), 
    filter: this.filter,
  });

  await copy.attach(card, index);

  return copy;

}


export default copySelf;