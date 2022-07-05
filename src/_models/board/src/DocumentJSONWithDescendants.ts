import BoardDocumentType from "./DocumentType.js"
import {LabelDocumentJSON} from "label/dist/DocumentJSON.js"
import {ListDocumentJSONWithDescendants} from "list/dist/DocumentJSONWithDescendants.js"


interface BoardDocumentJSONWithDescendants {
  id: BoardDocumentType["_id"]
  title: BoardDocumentType["title"]
  theme: BoardDocumentType["theme"]
  lists: ListDocumentJSONWithDescendants[]
  labels: LabelDocumentJSON[]
  idUser: BoardDocumentType["idUser"]
  isStarred: BoardDocumentType["isStarred"]
  dateCreation: BoardDocumentType["dateCreation"]
  dateLastView: BoardDocumentType["dateLastView"]
  dateLastActivity: BoardDocumentType["dateLastActivity"]
}


export {BoardDocumentJSONWithDescendants}
export default BoardDocumentJSONWithDescendants