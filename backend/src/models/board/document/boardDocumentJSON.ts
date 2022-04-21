import BoardDocumentType from "./documentType.js";


interface BoardDocumentJSON {
  id: BoardDocumentType["_id"];
  title: BoardDocumentType["title"];
  theme: BoardDocumentType["theme"];
  idUser: BoardDocumentType["idUser"];
  idLists: BoardDocumentType["idLists"];
  idLabels: BoardDocumentType["idLabels"];
  isStarred: BoardDocumentType["isStarred"];
  dateCreation: BoardDocumentType["dateCreation"];
  dateLastView: BoardDocumentType["dateLastView"];
  dateLastActivity: BoardDocumentType["dateLastActivity"];
}


export default BoardDocumentJSON;