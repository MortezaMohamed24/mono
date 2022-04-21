import Model from "#models/list/model/type";
import schema from "#models/list/schema";
import Methods from "#models/list/methods/type";
import mongoose from "mongoose";
import {ListDocument} from "#models/list/document";
import {ListDocumentType} from "#models/list/document";


type List = ListDocument;
const List = mongoose.model<ListDocumentType, Model, Methods>("List", schema);


export default List;