import {Oid} from "#util/oid";
import Methods from "../methods/type.js";
import Virtuals from "../virtuals/type.js";
import {Document} from "mongoose";
import DocumentType from "./documentType.js";


export interface LabelDocument extends Omit<Document<Oid, {}, DocumentType>, "_id" | "id">, Methods, Virtuals, DocumentType {
  /* Empty */
}


export default LabelDocument;