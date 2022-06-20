import Board from "src/models/board";


interface ListMethodsCopyArgument {
  title?: string | undefined;
  index?: number | undefined;
  board: Board;
  keepCards?: boolean | undefined;
}


export default ListMethodsCopyArgument;