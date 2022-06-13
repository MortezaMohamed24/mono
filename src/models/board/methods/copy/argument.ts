import User from "src/models/user";
import Board from "src/models/board";


interface BoardMethodCopyArgument {
  user: User;
  title?: Board["title"] | undefined;
  keepLists?: boolean | undefined;
  keepCards?: boolean | undefined;
  keepLabels?: boolean | undefined;
}


export default BoardMethodCopyArgument;