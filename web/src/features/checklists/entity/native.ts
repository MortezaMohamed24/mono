import ChecklistBase from "./base";


/**
 * A checklist as stored in the state
*/
export type ChecklistNative = Pick<ChecklistBase, 
  | "id" 
  | "title" 
  | "filter" 
  | "idUser" 
  | "idList" 
  | "idCard" 
  | "idBoard" 
  | "idCheckitems"
>


export default ChecklistNative;