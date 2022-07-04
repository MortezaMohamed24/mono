import Card from "src/Card";
import Label from "src/models/label/Label";
import BodyType from "./bodyType.js";
import ReturnType from "./returnType.js";


interface CardLabelActionConfig {
  body: BodyType;
  query: undefined;
  return: ReturnType;
  locals: {
    /** The card to label */
    card: Card;
    /** The label to add to `this.card` */
    label: Label;
  };
  authorized: true;
}


export default CardLabelActionConfig;