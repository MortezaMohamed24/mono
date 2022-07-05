import Card from "src/Card";
import Label from "src/models/label/model";
import BodyType from "./bodyType.js";
import ReturnType from "./returnType.js";


interface CardSetLabelsAction {
  body: BodyType;
  query: undefined;
  return: ReturnType;
  locals: {
    /** The card whose labels are to set */
    card: Card;
    /** The labels to set to `this.card` */
    labels: Label[];
  };
  authorized: true;
}


export default CardSetLabelsAction;