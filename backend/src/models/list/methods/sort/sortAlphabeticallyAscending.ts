import Card from "#models/card";


function sortAlphabeticallyAscending(cards: Card[]): Card[] {
  return cards.slice().sort((a, b) => {
    if (a.title < b.title) {
      return -1;
    } else if (a.title > b.title) {
      return 1;
    } else {
      return 0;
    }
  });
}


export default sortAlphabeticallyAscending;