import {Model} from "mongoose";
import Statics from "src/models/checkitem/statics/type";
import Methods from "src/models/checkitem/methods/type";
import Virtuals from "src/models/checkitem/virtuals/type";
import DocumentType from "src/models/checkitem/document/documentType";


interface CheckitemModel extends Model<DocumentType, {}, Methods, Virtuals>, Statics {
  // Empty
}


export default CheckitemModel;