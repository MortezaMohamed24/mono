import Card from "src/models/card";


function sortByDateCreationDescending(cards: Card[]): Card[] {
  return cards.slice().sort((a, b) => a.dateCreation - b.dateCreation);
}


export default sortByDateCreationDescending;