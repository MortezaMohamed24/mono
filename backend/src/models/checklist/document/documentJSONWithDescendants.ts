import {Oid} from "#util/oid";
import {ALL} from "#models/checklist/fields/constants";
import {INCOMPLETE} from "#models/checklist/fields/constants";
import {CheckitemDocumentJSON} from "#models/checkitem/document";


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