import Card from "src/Card";
import List from "src/models/list/List";
import BodyType from "./bodyType.js";
import ReturnType from "./returnType.js";


interface CardCopyRequestConfig {
  body: BodyType;
  query: undefined;
  return: ReturnType;
  locals: {
    /** The card to copy */
    card: Card;
    /** The list in/into which `this.card` is to be copied */
    list: List;
    /** The copy card created of `this.card` */
    copy: Card;
  };
  authorized: true;
}


export default CardCopyRequestConfig;