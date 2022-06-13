import {Oid} from "#util/oid";
import Methods from "src/models/checklist/methods/type";
import Virtuals from "src/models/checklist/virtuals/type";
import {Document} from "mongoose";
import {ChecklistDocumentType} from "src/models/checklist/document";


interface ChecklistDocument extends Omit<Document<Oid, {}, ChecklistDocumentType>, "_id" | "id">, ChecklistDocumentType, Methods, Virtuals {
  /* Empty */
}


export default ChecklistDocument;