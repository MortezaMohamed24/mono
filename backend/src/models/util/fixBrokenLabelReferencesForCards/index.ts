import ll from "#models/label/crud";
import Card from "#models/card";
import save from "#models/util/save";
import Label from "#models/label";


/**
 * Checkes whether `label` exists in `labels`
 */
const existsIn = (label: Label, labels: Label[]) => (
  !!labels.find(other => other.id.equals(label.id))
);

/**
 * Searches, in `labels`, for one that is similar to `label` 
 * and returns it, if it does not find one, it return `undefined`
 */
const findSimilar = (label: Label, labels: Label[]) => (
  labels.find(other => (
      other.color === label.color
    ) && (
      other.name?.trim().toLowerCase() === label.name?.trim().toLowerCase()
    )
  )
);

/**
 * A card has an `idLabels` array of ids refering to the labels of the card.
 * 
 * Every card is owned by a board, that is, it has an `idBoard` field refering to the owner board.
 * 
 * A card may only refer (in its `idLabels` array) to labels that are owned by its current owner board.
 * 
 * When moving a card into another board (aka, changing its owner board), the card will still be 
 * refering (in its `idLabels` array) to its labels of its prevoiuse owner board. 
 * That breaks the rule at line 1.
 * 
 * There are an apporoach for this problem: 
 *   Ending the relationship bewteen the relevant card and its labels from
 *   its previouse board. That is done by evaluating `card.idLabels = []`
 * 
 * That apporoach is good, but what if we wanted the card to retain its labels of its previous
 * board? 
 * 
 * We can: 
 *   0. copy the card's labels of the previuse owner board into the current owner board 
 *   1. ending the card's relationship with the old labels
 *   2. relating the card the copy labels
 * 
 * That is solves the problem. But, what if the current owner board has some labels that are
 * simillar to (have the same color and name as) the card's labels of the previouse owner board?
 * That way, the current owner board might have multiple distinct labels that look exactly the same.
 * 
 * The used algorithm is: 
 *   - end the cards relationship with its labels of the previouse owner board
 *   - for each `label` of the card's labels of the previouse owner board
 *     - if `label` exists in the card's current owner board
 *       - relate `label` back to the card
 *     - else, if the card's current owner board has a label simillar to `label`  
 *       - relate the simillar label to the card
 *     - else
 *       - create a new label for the current owner board that is simillar to `label` 
 *         and relate it to the card
 */
const fixBrokenLabelReferencesForCard = async (card: Card) => {
  /** labelsOfCardOfThePreviouseBoard */
  const oldLabels = await ll.fm(card.idLabels);

  /** `card`'s current owner board */
  const board = await card.board();

  /** All labels of `card`'s current owner board  */
  const newLabels = await board.labels();

  card.idLabels = [];

  card.idLabels = await Promise.all(oldLabels.map(async (label) => {
    if (existsIn(label, newLabels)) {
      return label.id;
    } 
    
    const similar = findSimilar(label, newLabels);

    if (similar) {
      return similar.id;
    }

    return (await label.copy(board)).id;
  }));

  await save(card);
};

/** Invokes `fixBrokenLabelReferncesForCard` for each card */
const fixBrokenLabelReferencesForCards = async (cards: Card[]) => {
  for (let card of cards) {
    await fixBrokenLabelReferencesForCard(card);
  }
};


export default fixBrokenLabelReferencesForCards;