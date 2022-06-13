import User from "src/models/user";
import Board from "src/models/board";


interface BoardMethodsCopySelfArgument {
  user: User;
  title?: Board["title"];
}


export default BoardMethodsCopySelfArgument;