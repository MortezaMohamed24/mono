import save from "#models/util/save";
import idUtil from "#models/util/idUtil";
import Checkitem from "#models/checkitem";


async function deattach(this: Checkitem) {
  const checklist = await this.checklist();

  idUtil.rem(checklist.idCheckitems, this.id);

  await save(checklist);
}


export default deattach;