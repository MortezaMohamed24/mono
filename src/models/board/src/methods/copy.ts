import User from "user"
import Board from "../Model.js"


type Argument = {
  user: User
  title?: Board["title"] | undefined
  keepLists?: boolean | undefined
  keepCards?: boolean | undefined
  keepLabels?: boolean | undefined
}

async function copy(this: Board, arg: Argument) {
  const user = arg.user
  const title = arg.title ?? this.title 
  const board = await this.copySelf({user, title})
  const keepLists = arg.keepLists ?? true
  const keepCards = arg.keepCards ?? true
  const keepLabels = arg.keepLabels ?? true

  keepLists && await this.copyOwnLists({board, keepCards})
  keepLabels && await this.copyOwnLabels(board)

  return board
}


export {copy}
export default copy