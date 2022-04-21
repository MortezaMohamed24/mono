import User from "#models/user/model";
import {Oid} from "#util/oid";
import Board from "#models/board";


interface BoardStaticsMakeArgument {
  id?: Oid | undefined;
  user: User;
  title: Board["title"]; 
  theme: Board["theme"]; 
  isStarred?: Board["isStarred"];
}


export default BoardStaticsMakeArgument;