import Checkitem from "#models/checkitem";
import Checklist from "#models/checklist";


async function move(this: Checkitem, checklist: Checklist, index: number = Infinity) {
  if (checklist.id.equals(this.idChecklist)) {
    await this.shift(index);
  } else {
    await this.deattach();
    await this.attach(checklist, index);
  }
}


export default move;