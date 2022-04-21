import Card from "#models/card";
import QueryType from "./queryType.js";
import ReturnType from "./returnType.js";


interface CardProjectActionConfig {
  body: undefined;
  query: QueryType;
  return: ReturnType;
  locals: {
    /** The card to project */
    card: Card;
  };
  authorized: true;
}


export default CardProjectActionConfig;