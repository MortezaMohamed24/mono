import v from "#models/card/fields/validators";
import Card from "#models/card";
import save from "#models/util/save";
import Argument from "./argument.js";
import fixBrokenLabelReferences from "#models/util/fixBrokenLabelReferencesForCards";


async function copySelf(this: Card, {
  list, 
  title = this.title, 
  index = Infinity,
  keepDates = true, 
  keepLabels = true,
}: Argument) {
  const copy = new Card({
    due: keepDates ? this.dateDue : null,
    start: keepDates ? this.dateStart : null,
    title: v.title(title),
    idLabels: keepLabels ? this.idLabels : [],
    isWatched: this.isWatched,
    isComplete: keepDates ? this.isComplete : false,
    description: this.description,
    dateCreation: Date.now(),
    dateLastView: null,
  });

  await copy.attach(list, index);

  if (keepLabels) {
    await fixBrokenLabelReferences([copy]);
  }
  
  await save(copy);

  return copy;
}


export default copySelf;