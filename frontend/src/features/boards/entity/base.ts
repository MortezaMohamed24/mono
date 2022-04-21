import {Name} from "../colors";
import {ListRawNested} from "/lists/entity";
import {LabelRawNested} from "/labels/entity";


export type BoardBase = {
  id: string;
  title: string;
  theme: Name;
  lists: ListRawNested[];
  labels: LabelRawNested[];
  idUser: string;
  idLists: string[];
  idLabels: string[];
  isStarred: boolean;
  dateLastView: number;
} 


export default BoardBase;