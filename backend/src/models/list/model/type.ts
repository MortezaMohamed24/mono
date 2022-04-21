import {Model} from "mongoose";
import Statics from "../statics/type.js";
import Methods from "../methods/type.js";
import Virtuals from "../virtuals/type.js";
import DocumentType from "../document/documentType.js";


export type ListModel = Model<DocumentType, {}, Methods, Virtuals> & Statics & {
  // Empty
}


export default ListModel;