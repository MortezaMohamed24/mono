import save from "#models/util/save";
import idUtil from "#models/util/idUtil";
import Checkitem from "#models/checkitem";


async function shift(this: Checkitem, index = Infinity) {
  const checklist = await this.checklist();

  idUtil.move(checklist.idCheckitems, this.id, index);

  await save(checklist);
}


export default shift;