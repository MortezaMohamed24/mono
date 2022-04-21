import lt from "#models/list/crud";
import Checkitem from "#models/checkitem";


async function list(this: Checkitem) {
  const list = await lt.f(this.idList);

  if (list) {
    return list;
  }

  throw new Error("checkitem: could not find owner list");
}


export default list;