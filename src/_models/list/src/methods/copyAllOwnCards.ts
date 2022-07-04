import Card from "card"
import List from "../Model.js"
import FBLRFC from "label/dist/util/fixBrokenLabelReferencesForCards.js"


async function copyAllOwnCards(this: List, listB: List): Promise<Card[]> {
  const copies: Card[] = []

  for (let card of await this.cards()) {
    copies.push(await card.copy({list: listB}))
  }

  if (copies.length > 0) {
    await FBLRFC(copies)
  }

  return copies
}


export {copyAllOwnCards}
export default copyAllOwnCards