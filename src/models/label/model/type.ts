import {Model} from "mongoose";
import Statics from "src/models/label/statics/type";
import Methods from "src/models/label/methods/type";
import Virtuals from "src/models/label/virtuals/type";
import {LabelDocumentType} from "src/models/label/document";


export interface LabelModel extends Model<LabelDocumentType, {}, Methods, Virtuals>, Statics {
  // Empty
}


export default LabelModel;