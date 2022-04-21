import User from "#models/user";
import Board from "#models/board";


interface BoardMethodsCopySelfArgument {
  user: User;
  title?: Board["title"];
}


export default BoardMethodsCopySelfArgument;