import save from "src/models/util/save";
import idUtil from "src/models/util/idUtil";
import Checklist from "src/models/checklist";


async function deattach(this: Checklist) {
  const card = await this.card();

  idUtil.rem(card.idChecklists, this.id);

  await save(card);
}


export default deattach;