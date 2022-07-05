import LabelBase from "./base";

     
/** 
 * A label as stored in the state
 */ 
export type LabelNative = Pick<LabelBase, 
  | "id" 
  | "name" 
  | "color" 
  | "idUser" 
  | "idBoard"
>


export default LabelNative;