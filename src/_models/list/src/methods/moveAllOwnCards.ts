import List from "../Model.js"
import Card from "card"


async function moveAllOwnCards(this: List, list: List): Promise<Card[]> {
  const cards = await this.cards()

  
  for (let card of cards) {
    await card.move(list)
  }


  return cards
}


export {moveAllOwnCards}
export default moveAllOwnCards