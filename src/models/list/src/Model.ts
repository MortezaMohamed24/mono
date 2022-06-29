import {Model} from "mongoose";
import Statics from "../statics/type.js";
import Methods from "./methods/type.js";
import Virtuals from "../virtuals/type.js";
import DocumentType from "./document/documentType.js";


export type ListModel = Model<DocumentType, {}, Methods, Virtuals> & Statics & {
  // Empty
}


export default ListModel;

import Model from "src/models/list/model/type";
import schema from "src/models/list/schema";
import Methods from "src/models/list/methods/type";
import mongoose from "mongoose";
import {ListDocument} from "src/models/list/document";
import {ListDocumentType} from "src/models/list/document";


type List = ListDocument;
const List = mongoose.model<ListDocumentType, Model, Methods>("List", schema);


export default List;