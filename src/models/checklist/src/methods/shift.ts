import save from "src/models/util/save";
import idUtil from "src/models/util/idUtil";
import Checklist from "src/models/checklist";


async function shift(this: Checklist, index: number = Infinity) {
  const card = await this.card();

  idUtil.move(card.idChecklists, this.id, index);

  await save(card);
}


export default shift;