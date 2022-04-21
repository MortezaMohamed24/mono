import {Oid} from "#util/oid";
import Methods from "#models/user/methods/type";
import Virtuals from "#models/user/virtuals/type";
import {Document} from "mongoose";
import DocumentType from "./documentType.js";


export interface UserDocument extends Omit<Document<Oid, {}, DocumentType>, "_id" | "id">, Methods, Virtuals, DocumentType {
  /* Empyt */
}


export default UserDocument;