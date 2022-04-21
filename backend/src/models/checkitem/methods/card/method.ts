import cd from "#models/card/crud";
import Checkitem from "#models/checkitem";


async function card(this: Checkitem) {
  const card = await cd.f(this.idCard);

  if (card) {
    return card;
  }

  throw new Error("checkitem: could not find owner card");
}


export default card;