import {ChecklistRawNested} from "/features/checklists/entity";


/** 
 * All fields a card may possibly have 
*/
export type CardBase = {
  id: string;
  title: string;
  idList: string;
  idUser: string;
  dateDue: number | null;
  idBoard: string;
  idLabels: string[];
  dateStart: number | null;
  isWatched: boolean;
  isComplete: boolean;
  checklists: ChecklistRawNested[];
  description: string | null;
  dateCreation: number;
  idChecklists: string[];
}


export default CardBase;