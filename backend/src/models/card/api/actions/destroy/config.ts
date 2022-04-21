import Card from "#models/card";
import BodyType from "./bodyType.js";
import ReturnType from "./returnType.js";


interface CardDestroyActionConfig {
  body: BodyType;
  query: undefined;
  return: ReturnType;
  locals: {
    /** The card to destroy */
    card: Card;
  };
  authorized: true;
}


export default CardDestroyActionConfig;