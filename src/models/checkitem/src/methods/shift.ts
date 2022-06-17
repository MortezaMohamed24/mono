import save from "src/models/util/save";
import idUtil from "src/models/util/idUtil";
import Checkitem from "src/models/checkitem";


async function shift(this: Checkitem, index = Infinity) {
  const checklist = await this.checklist();

  idUtil.move(checklist.idCheckitems, this.id, index);

  await save(checklist);
}


export default shift;