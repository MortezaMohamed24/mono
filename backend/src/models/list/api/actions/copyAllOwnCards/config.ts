import List from "#models/list";
import Card from "#models/card";
import BodyType from "./bodyType.js";
import ReturnType from "./returnType.js";


interface ListCopyAllOwnCardsActionConfig {
  body: BodyType;
  query: undefined;
  return: ReturnType;
  locals: {
    /** The list whose own cards are to copy */
    listA: List;
    /** The list into which to copy `this.listA`'s own cards */
    listB: List;
    /** The copies of `this.listA`'s own cards */
    cards: Card[];
  };
  authorized: true;
}


export default ListCopyAllOwnCardsActionConfig;