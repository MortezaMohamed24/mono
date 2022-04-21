import {CardNative} from "/cards/entity";


export function sortByDateCreationAscending(cards: CardNative[]): CardNative[] {
  return cards.slice().sort((a, b) => b.dateCreation - a.dateCreation);
}

export function sortByDateCreationDescending(cards: CardNative[]): CardNative[] {
  return cards.slice().sort((a, b) => a.dateCreation - b.dateCreation);
}

export function sortAlphabeticallyAscending(cards: CardNative[]): CardNative[] {
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

export function sortAlphabeticallyDescending(cards: CardNative[]): CardNative[] {
  return cards.slice().sort((a, b) => {
    if (a.title < b.title) {
      return 1;
    } else if (a.title > b.title) {
      return -1;
    } else {
      return 0;
    }
  });
}


export default Object.freeze({
  sortByDateCreationAscending,
  sortByDateCreationDescending,
  sortAlphabeticallyAscending,
  sortAlphabeticallyDescending,
});