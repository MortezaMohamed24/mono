import {Oid} from "#util/oid";
import Methods from "../methods/type.js";
import Virtuals from "../virtuals/type.js";
import {Document} from "mongoose";
import DocumentType from "./documentType.js";


interface BoardDocument extends Omit<Document<Oid, {}, DocumentType>, "_id" | "id">, DocumentType, Methods, Virtuals {
  /* Empty */
}


export default BoardDocument;