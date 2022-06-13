import UserDocumentType from "./documentType.js";
import {BoardDocumentJSONWithDescendants} from "src/models/board/document";


export interface UserDocumentJSONWithDescendants {
  id: UserDocumentType["_id"];
  boards: BoardDocumentJSONWithDescendants[];
  avatar: UserDocumentType["avatar"];
  username: UserDocumentType["username"];
  lastname: UserDocumentType["lastname"];
  initials: UserDocumentType["initials"];
  firstname: UserDocumentType["firstname"];
}


export default UserDocumentJSONWithDescendants;