import Card from "src/Card";
import List from "src/models/list/List";
import Label from "src/models/label/Label";
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