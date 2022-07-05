import Card from "card"


export function sortByDateCreationAscending(cards: Card[]): Card[] {
  return cards.slice().sort((a, b) => b.dateCreation - a.dateCreation)
}

export function sortByDateCreationDescending(cards: Card[]): Card[] {
  return cards.slice().sort((a, b) => a.dateCreation - b.dateCreation)
}

export function sortAlphabeticallyDescending(cards: Card[]): Card[] {
  return cards.slice().sort((a, b) => {
    if (a.title < b.title) {
      return 1
    } else if (a.title > b.title) {
      return -1
    } else {
      return 0
    }
  })
}

export function sortAlphabeticallyAscending(cards: Card[]): Card[] {
  return cards.slice().sort((a, b) => {
    if (a.title < b.title) {
      return -1
    } else if (a.title > b.title) {
      return 1
    } else {
      return 0
    }
  })
}