import {Oid} from "#util/oid";
import {ALL} from "src/models/checklist/fields/constants";
import {INCOMPLETE} from "src/models/checklist/fields/constants";


export interface ChecklistDocumentType {
  _id: Oid;
  title: string;
  filter: typeof ALL | typeof INCOMPLETE;
  idUser: Oid;
  idList: Oid;
  idCard: Oid;
  idBoard: Oid;
  idCheckitems: Oid[];
}


export default ChecklistDocumentType;