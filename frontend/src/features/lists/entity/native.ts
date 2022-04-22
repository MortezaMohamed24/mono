import {ListBase} from "./base";


/** 
 * A list as stored in the state
*/
export type ListNative = Pick<ListBase, 
  | "id" 
  | "title" 
  | "idUser"
  | "idBoard" 
  | "idCards" 
  | "isWatched" 
  | "sortMethod"
>


export default ListNative;