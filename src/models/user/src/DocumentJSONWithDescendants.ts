import {UserDocumentType} from "./DocumentType.js"
import {BoardDocumentJSONWithDescendants} from "board/dist/DocumentJSONWithDescendants.js"


export interface UserDocumentJSONWithDescendants {
  id: UserDocumentType["_id"]
  boards: BoardDocumentJSONWithDescendants[]
  avatar: UserDocumentType["avatar"]
  username: UserDocumentType["username"]
  lastname: UserDocumentType["lastname"]
  initials: UserDocumentType["initials"]
  firstname: UserDocumentType["firstname"]
}


export default UserDocumentJSONWithDescendants