import {LabelDocumentJSON} from "src/models/label/document";
import {CardDocumentJSONWithDescendants} from "src/models/card/document";


type ListMoveAllOwnCardsActionReturnType = Readonly<{
  /** The copies of listA.s own cards */
  cards: CardDocumentJSONWithDescendants[];
  /** All the labels of the board owner of `this.cards`  */
  labels: LabelDocumentJSON[];
}>;


export default ListMoveAllOwnCardsActionReturnType;