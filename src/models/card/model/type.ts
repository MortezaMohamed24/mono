import {Model} from "mongoose";
import Methods from "src/models/card/methods/type";
import Statics from "src/models/card/statics/type";
import Virtuals from "src/models/card/virtuals/type";
import {CardDocumentType} from "src/models/card/document";


export interface CardModel extends Model<CardDocumentType, {}, Methods, Virtuals>, Statics {
  /** Empty */
}


export default CardModel;