import List from "#models/list";
import {Oid} from "#util/oid";
import Board from "#models/board";



interface ListStaticsMakeArgument {
  id?: Oid | undefined;
  title: List["title"];
  board: Board;
  sortMethod?: List["sortMethod"] | undefined;
}


export default ListStaticsMakeArgument;