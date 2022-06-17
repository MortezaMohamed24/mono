import BoardBase from "./base";


export type BoardNative = Pick<BoardBase, 
  | "id"
  | "title"
  | "theme"
  | "idUser"
  | "idLists"
  | "idLabels"
  | "isStarred"
  | "dateLastView"
>


export default BoardNative;