import {ALL} from "../fields/constants";
import {INCOMPLETE} from "../fields/constants";
import {CheckitemRawNested} from "/checkitems/entity";


/** 
 * All possible fields a checklist may have
*/
export type ChecklistBase = {
  id: string;
  title: string;
  filter: typeof ALL | typeof INCOMPLETE;
  idUser: string;
  idList: string;
  idCard: string;
  idBoard: string;
  checkitems: CheckitemRawNested[];
  idCheckitems: string[];
}


export default ChecklistBase