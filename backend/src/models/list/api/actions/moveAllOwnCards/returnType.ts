import {LabelDocumentJSON} from "#models/label/document";
import {CardDocumentJSONWithDescendants} from "#models/card/document";


type ListMoveAllOwnCardsActionReturnType = Readonly<{
  /** The cards moved from listA to listB */
  cards: CardDocumentJSONWithDescendants[];
  /** All the labels of the board owner of `this.cards`  */
  labels: LabelDocumentJSON[];
}>;


export default ListMoveAllOwnCardsActionReturnType;