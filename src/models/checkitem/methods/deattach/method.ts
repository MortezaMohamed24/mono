import save from "src/models/util/save";
import idUtil from "src/models/util/idUtil";
import Checkitem from "src/models/checkitem";


async function deattach(this: Checkitem) {
  const checklist = await this.checklist();

  idUtil.rem(checklist.idCheckitems, this.id);

  await save(checklist);
}


export default deattach;