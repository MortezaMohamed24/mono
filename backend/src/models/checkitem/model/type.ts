import {Model} from "mongoose";
import Statics from "#models/checkitem/statics/type";
import Methods from "#models/checkitem/methods/type";
import Virtuals from "#models/checkitem/virtuals/type";
import DocumentType from "#models/checkitem/document/documentType";


interface CheckitemModel extends Model<DocumentType, {}, Methods, Virtuals>, Statics {
  // Empty
}


export default CheckitemModel;