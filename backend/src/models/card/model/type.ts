import {Model} from "mongoose";
import Methods from "#models/card/methods/type";
import Statics from "#models/card/statics/type";
import Virtuals from "#models/card/virtuals/type";
import {CardDocumentType} from "#models/card/document";


export interface CardModel extends Model<CardDocumentType, {}, Methods, Virtuals>, Statics {
  /** Empty */
}


export default CardModel;