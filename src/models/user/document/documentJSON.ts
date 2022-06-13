import UserDocumentType from "./documentType.js";


export interface UserDocumentJSON {
  id: UserDocumentType["_id"];
  avatar: UserDocumentType["avatar"];
  idBoards: UserDocumentType["idBoards"];
  username: UserDocumentType["username"];
  lastname: UserDocumentType["lastname"];
  initials: UserDocumentType["initials"];
  firstname: UserDocumentType["firstname"];
}


export default UserDocumentJSON;