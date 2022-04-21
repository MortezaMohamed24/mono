import {Model} from "mongoose";
import Statics from "#models/label/statics/type";
import Methods from "#models/label/methods/type";
import Virtuals from "#models/label/virtuals/type";
import {LabelDocumentType} from "#models/label/document";


export interface LabelModel extends Model<LabelDocumentType, {}, Methods, Virtuals>, Statics {
  // Empty
}


export default LabelModel;