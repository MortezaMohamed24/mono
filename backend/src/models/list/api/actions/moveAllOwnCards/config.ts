import List from "#models/list";
import Card from "#models/card";
import BodyType from "./bodyType.js";
import ReturnType from "./returnType.js";


interface ListMoveAllOwnCardsActionConfig {
  body: BodyType;
  query: undefined;
  return: ReturnType;
  locals: {
    /** The list whose own cards are to move */
    listA: List;
    /** The list into which to move `this.listA`'s own cards  */
    listB: List;
    /** The cards that were moved from `this.listA` to `this.listB` */
    cards: Card[];
  };
  authorized: true;
}


export default ListMoveAllOwnCardsActionConfig;