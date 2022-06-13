import {Oid} from "#util/oid";


export interface UserDocumentType {
  _id: Oid;
  username: string; 
  password: {hash: string; salt: string}; 
  avatar: string | null;
  idBoards: Oid[];
  lastname: string; 
  initials: string; 
  firstname: string;
}


export default UserDocumentType;