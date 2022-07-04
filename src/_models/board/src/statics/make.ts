import {Document} from "mongoose"
import {Oid} from "oid"
import types from "../fields/types.js"
import {User} from "user"
import {Board} from "../Model.js"
import {Label} from "label"


interface Argument {
  id?: Oid | undefined
  user: User
  title: Board["title"] 
  theme: Board["theme"] 
  isStarred?: Board["isStarred"]
}

async function make({id = new Oid(), user, title, theme, isStarred = false}: Argument): Promise<Board> {
  const board = new Board({
    id: id,
    title: types.title(title),
    theme: types.theme(theme),
    isStarred: isStarred,
    dateLastView: null,
    dateCreation: Date.now(),
    dateLastActivity: null,
  })

  await board.attach(user)
  await Label.makeSet(board)

  return board
}


export {make}
export default make

Board.findOne({title: "", theme: 67576575})