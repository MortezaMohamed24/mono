import {Oid} from "#util/oid";
import Checklist from "src/models/checklist";
import Checkitem from "src/models/checkitem";


async function copyOwnCheckitems(this: Checklist, checklist: Checklist) {
  const copies: Checkitem[] = [];

  for (let checkitem of await this.checkitems()) {
    copies.push(await checkitem.copy(checklist));
  }

  return copies;
}


export default copyOwnCheckitems;