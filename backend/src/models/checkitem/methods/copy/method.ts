import save from "#models/util/save";
import Checkitem from "#models/checkitem";
import Checklist from "#models/checklist";


async function copy(this: Checkitem, checklist: Checklist, index: number = Infinity) {
  const copy = new Checkitem({
    content: this.content, 
    isComplete: this.isComplete,
  });

  await copy.attach(checklist, index);
  await save(copy);

  return copy;
}


export default copy;