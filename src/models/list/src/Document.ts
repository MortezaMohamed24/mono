import {Oid} from "#util/oid";
import Methods from "src/models/list/methods/type";
import Virtuals from "src/models/list/virtuals/type";
import {Document} from "mongoose";
import {ListDocumentType} from "src/models/list/document";


export interface ListDocument extends Omit<Document<Oid, {}, ListDocumentType>, "_id" | "id">, Methods, Virtuals, ListDocumentType { 
  /* Empty */ 
}


export default ListDocument;