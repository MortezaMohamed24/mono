import List from "#models/list";


async function moveAllOwnCards(this: List, list: List) {
  const cards = await this.cards();

  
  for (let card of cards) {
    await card.move(list);
  }


  return cards;
}


export default moveAllOwnCards;