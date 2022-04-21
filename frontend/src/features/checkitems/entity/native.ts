import {CheckitemBase} from "./base";


/** 
 * A checktiem as stored in the state
*/
export type CheckitemNative = Pick<CheckitemBase, 
  | "id" 
  | "idUser" 
  | "idList" 
  | "idCard" 
  | "content" 
  | "idBoard" 
  | "isComplete" 
  | "idChecklist"
>


export default CheckitemNative;