import Card from "src/models/card";


function sortByDateCreationAscending(cards: Card[]): Card[] {
  return cards.slice().sort((a, b) => b.dateCreation - a.dateCreation);
}


export default sortByDateCreationAscending;