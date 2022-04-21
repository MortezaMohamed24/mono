import Card from "#models/card";
import save from "#models/util/save";
import idUtil from "#models/util/idUtil";


async function deattach(this: Card) {
  const list = await this.list();

  idUtil.rem(list.idCards, this.id);

  await save(list);
}


export default deattach;