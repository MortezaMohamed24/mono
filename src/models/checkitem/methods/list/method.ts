import lt from "src/models/list/crud";
import Checkitem from "src/models/checkitem";


async function list(this: Checkitem) {
  const list = await lt.f(this.idList);

  if (list) {
    return list;
  }

  throw new Error("checkitem: could not find owner list");
}


export default list;