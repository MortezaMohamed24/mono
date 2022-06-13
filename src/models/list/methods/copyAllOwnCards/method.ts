import Card from "src/models/card";
import List from "src/models/list";
import FBLRFC from "src/models/util/fixBrokenLabelReferencesForCards";


async function copyAllOwnCards(this: List, listB: List) {
  const copies: Card[] = [];

  for (let card of await this.cards()) {
    copies.push(await card.copy({list: listB}));
  }

  if (copies.length > 0) {
    await FBLRFC(copies);
  }

  return copies;
}


export default copyAllOwnCards;