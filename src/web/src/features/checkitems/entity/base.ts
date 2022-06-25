/** 
 * All possible fields a checkitem may have 
 */
export type CheckitemBase = {
  id: string;
  idUser: string;
  idList: string;
  idCard: string;
  content: string;
  idBoard: string;
  isComplete: boolean;
  idChecklist: string;
}


export default CheckitemBase;