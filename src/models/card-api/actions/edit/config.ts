import Card from "src/models/card";
import BodyType from "./bodyType.js";
import ReturnType from "./returnType.js";


interface CardEditRequestConfig {
  body: BodyType;
  query: undefined;
  return: ReturnType;
  locals: {
    /** The card to edit */
    card: Card;
  };
  authorized: true;
}


export default CardEditRequestConfig;