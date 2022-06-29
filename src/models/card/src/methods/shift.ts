import Card from "src/models/card";
import save from "src/models/util/save";
import idUtil from "src/models/util/idUtil";


async function shift(this: Card, index = Infinity) {
  const list = await this.list();

  idUtil.move(list.idCards, this.id, index);

  await save(list);
}


export default shift;