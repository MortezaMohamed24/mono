import cd from "src/models/card/crud";
import Error from "#util/error";
import Checklist from "src/models/checklist";


async function card(this: Checklist) {
  const card = await cd.f(this.idCard);

  if (card) {
    return card;
  }

  throw new Error(500, "checklist: could not find owner card");
}


export default card;