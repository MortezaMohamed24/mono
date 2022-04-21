import {Oid} from "#util/oid";


export interface CheckitemDocumentType {
  _id: Oid;
  idUser: Oid;
  idList: Oid;
  idCard: Oid;
  idBoard: Oid;
  content: string;
  isComplete: boolean;
  idChecklist: Oid;
}


export default CheckitemDocumentType;