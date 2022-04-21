import Card from "#models/card";
import Label from "#models/label";
import BodyType from "./bodyType.js";
import ReturnType from "./returnType.js";


interface CardUnlabelActionConfig {
  body: BodyType;
  query: undefined;
  return: ReturnType;
  locals: {
    /** The id of the card to unlabel */
    card: Card;
    /** The label to remove from `this.card` */
    label: Label;
  };
  authorized: true;
}


export default CardUnlabelActionConfig;