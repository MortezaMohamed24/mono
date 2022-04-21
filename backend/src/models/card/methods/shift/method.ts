import Card from "#models/card";
import save from "#models/util/save";
import idUtil from "#models/util/idUtil";


async function shift(this: Card, index = Infinity) {
  const list = await this.list();

  idUtil.move(list.idCards, this.id, index);

  await save(list);
}


export default shift;