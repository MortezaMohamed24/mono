import Card from "src/models/card";
import save from "src/models/util/save";
import idUtil from "src/models/util/idUtil";


async function deattach(this: Card) {
  const list = await this.list();

  idUtil.rem(list.idCards, this.id);

  await save(list);
}


export default deattach;