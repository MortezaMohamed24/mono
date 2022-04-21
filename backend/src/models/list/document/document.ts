import {Oid} from "#util/oid";
import Methods from "#models/list/methods/type";
import Virtuals from "#models/list/virtuals/type";
import {Document} from "mongoose";
import {ListDocumentType} from "#models/list/document";


export interface ListDocument extends Omit<Document<Oid, {}, ListDocumentType>, "_id" | "id">, Methods, Virtuals, ListDocumentType { 
  /* Empty */ 
}


export default ListDocument;