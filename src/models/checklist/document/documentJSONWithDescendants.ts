import {Oid} from "#util/oid";
import {ALL} from "src/models/checklist/fields/constants";
import {INCOMPLETE} from "src/models/checklist/fields/constants";
import {CheckitemDocumentJSON} from "src/models/checkitem/document";


export interface ChecklistDocumentJSONWithDescendants {
  id: Oid;
  title: string;
  filter: typeof ALL | typeof INCOMPLETE;
  idUser: Oid;
  idList: Oid;
  idCard: Oid;
  idBoard: Oid;
  checkitems: CheckitemDocumentJSON[];
}


export default ChecklistDocumentJSONWithDescendants;