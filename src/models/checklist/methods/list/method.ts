import lt from "src/models/list/crud";
import Error from "#util/error";
import Checklist from "src/models/checklist";


async function list(this: Checklist) {
  const list = lt.f(this.idList);

  if (list) {
    return list;
  }

  throw new Error(500, "checklist: could not find owner list");
}


export default list;