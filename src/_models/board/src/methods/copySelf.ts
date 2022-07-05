import User from "user"
import types from "../fields/types.js"
import Board from "../Model.js"


type Argument = {
  user: User
  title?: Board["title"]
}

async function copySelf(this: Board, {user, title = this.title}: Argument): Promise<Board> {
  const copy = new Board({
    title: types.title(title),
    theme: this.theme,
    isStarred: this.isStarred,
    dateLastView: null,
    dateCreation: Date.now(),
    dateLastActivity: null,
  })

  await copy.attach(user)

  return copy
}


export {copySelf}
export default copySelf