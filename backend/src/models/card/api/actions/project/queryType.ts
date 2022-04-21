import {Oid} from "#util/oid";
import {CardProjectorType} from "#models/card/methods/project";


interface CardProjectActionQuery {
  /** The id of the card to project */
  readonly idCard: Oid;
  /** The project to use to project the card specified by `this.idCard` */
  readonly projector: CardProjectorType;
}


export default CardProjectActionQuery;