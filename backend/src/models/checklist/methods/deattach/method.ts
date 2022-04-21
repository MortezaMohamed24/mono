import save from "#models/util/save";
import idUtil from "#models/util/idUtil";
import Checklist from "#models/checklist";


async function deattach(this: Checklist) {
  const card = await this.card();

  idUtil.rem(card.idChecklists, this.id);

  await save(card);
}


export default deattach;