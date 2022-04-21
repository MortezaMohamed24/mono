import {Oid} from "#util/oid";


export interface CardDocumentType {
  _id: Oid;
  title: string;
  idUser: Oid;
  idList: Oid;
  idBoard: Oid;
  dateDue: number | null;
  idLabels: Oid[];
  dateStart: number | null;
  isWatched: boolean;
  isComplete: boolean;
  description: string | null;
  dateCreation: number;
  dateLastView: number | null;
  idChecklists: Oid[];
}


export default CardDocumentType;