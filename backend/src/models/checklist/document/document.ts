import {Oid} from "#util/oid";
import Methods from "#models/checklist/methods/type";
import Virtuals from "#models/checklist/virtuals/type";
import {Document} from "mongoose";
import {ChecklistDocumentType} from "#models/checklist/document";


interface ChecklistDocument extends Omit<Document<Oid, {}, ChecklistDocumentType>, "_id" | "id">, ChecklistDocumentType, Methods, Virtuals {
  /* Empty */
}


export default ChecklistDocument;