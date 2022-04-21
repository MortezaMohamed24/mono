import Card from "#models/card";
import List from "#models/list";
import Label from "#models/label";
import BodyType from "./bodyType.js";
import ReturnType from "./returnType.js";


interface CardCreateActionConfig {
  body: BodyType;
  query: undefined;
  return: ReturnType;
  locals: {
    /** The created card */
    card: Card;
    /** The list for which to create a card */
    list: List;
    /** The labels to add to `this.card` */
    labels: Label[];
  };
  authorized: true;
}


export default CardCreateActionConfig;