import User from "src/models/user/model";
import {Oid} from "#util/oid";
import Board from "src/models/board";


interface BoardStaticsMakeArgument {
  id?: Oid | undefined;
  user: User;
  title: Board["title"]; 
  theme: Board["theme"]; 
  isStarred?: Board["isStarred"];
}


export default BoardStaticsMakeArgument;