import {Oid} from "#util/oid";
import Methods from "src/models/card/methods/type";
import Virtuals from "src/models/card/virtuals/type";
import {Document} from "mongoose";
import DocumentType from "./documentType.js";


export interface CardDocument extends Omit<Document<Oid, {}, DocumentType>, "_id" | "id">, DocumentType, Methods, Virtuals {
  // Empty
}


export default CardDocument;