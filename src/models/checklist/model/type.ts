import {Model} from "mongoose";
import Methods from "../methods/type.js";
import ChecklistStatics from "../statics/type.js";
import Virtuals from "../virtuals/type.js";
import DocumentType from "../document/documentType.js";


interface ChecklistModel extends Model<DocumentType, {}, Methods, Virtuals>, ChecklistStatics {
  // Empty
}


export default ChecklistModel;