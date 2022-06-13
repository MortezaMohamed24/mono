import lt from "src/models/list/crud";
import Card from "src/models/card";
import Error from "#util/error";


async function list(this: Card) {
  const list = await lt.f(this.idList);

  if (list) {
    return list;
  }

  throw new Error(400, "card: could not find owner list");
}


export default list;