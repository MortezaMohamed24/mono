import Model from "src/models/list/model/type";
import schema from "src/models/list/schema";
import Methods from "src/models/list/methods/type";
import mongoose from "mongoose";
import {ListDocument} from "src/models/list/document";
import {ListDocumentType} from "src/models/list/document";


type List = ListDocument;
const List = mongoose.model<ListDocumentType, Model, Methods>("List", schema);


export default List;