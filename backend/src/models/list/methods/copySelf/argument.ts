import Board from "#models/board";


interface ListMethodsCopySelfArgument {
  title?: string | undefined;
  index?: number | undefined;
  board: Board;
}


export default ListMethodsCopySelfArgument;