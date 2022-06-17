import {Name} from "../colors";
import {ListRawNested} from "/features/lists/entity";
import {LabelRawNested} from "/features/labels/entity";


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
  dateLastView: number | null;
} 


export default BoardBase;