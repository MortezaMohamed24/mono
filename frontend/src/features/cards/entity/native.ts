import CardBase from "./base";


/** 
 * A card as stored in the state
*/
export type CardNative = Pick<CardBase, 
  | "id"
  | "title"
  | "idUser"
  | "idList"
  | "dateDue"
  | "idBoard"
  | "idLabels"
  | "dateStart"
  | "isWatched"
  | "isComplete"
  | "description"
  | "dateCreation"
  | "idChecklists"
>


export default CardNative;