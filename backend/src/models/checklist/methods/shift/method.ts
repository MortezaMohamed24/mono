import save from "#models/util/save";
import idUtil from "#models/util/idUtil";
import Checklist from "#models/checklist";


async function shift(this: Checklist, index: number = Infinity) {
  const card = await this.card();

  idUtil.move(card.idChecklists, this.id, index);

  await save(card);
}


export default shift;