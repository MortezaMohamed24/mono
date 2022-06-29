import BoardDocumentType from "./DocumentType.js";
import {LabelDocumentJSON} from "src/models/label/document";
import {ListDocumentJSONWithDescendants} from "src/models/list/document";


interface BoardDocumentJSONWithDescendants {
  id: BoardDocumentType["_id"];
  title: BoardDocumentType["title"];
  theme: BoardDocumentType["theme"];
  lists: ListDocumentJSONWithDescendants[];
  labels: LabelDocumentJSON[];
  idUser: BoardDocumentType["idUser"];
  isStarred: BoardDocumentType["isStarred"];
  dateCreation: BoardDocumentType["dateCreation"];
  dateLastView: BoardDocumentType["dateLastView"];
  dateLastActivity: BoardDocumentType["dateLastActivity"];
}


export default BoardDocumentJSONWithDescendants;