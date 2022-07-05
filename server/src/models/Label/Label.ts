import {v4} from "uuid"
import {User} from "../User/User.js"
import {Error} from "../../Error.js"
import {Board} from "../Board/Board.js"
import {LabelKey} from "./LabelKey.js"
import {LabelColor} from "./LabelColor.js"
import {LabelProjector} from "./LabelProjector.js"
import {LabelProjection} from "./LabelProjection.js"
import {LabelInitializer} from "./LabelInitializer.js"


export class Label {
  id: string
  name: string | null
  color: LabelColor
  idUser: string
  idBoard: string


  constructor(board: Board, initializer: LabelInitializer) {
    this.id = v4()
    this.name = initializer.name
    this.color = initializer.color
    this.idUser = board.idUser
    this.idBoard = board.id
    board.idLabels.push(this.id)
    Label.items.push(this)
  }


  get user() {
    return User.items.find(user => user.id === this.idUser)
  }

  get board() {
    return Board.items.find(board => board.id === this.idBoard)
  }


  project({keys}: LabelProjector) {
    const output: LabelProjection = {}

    keys.includes(LabelKey.id) && (output.id = this.id)
    keys.includes(LabelKey.name) && (output.name = this.name)
    keys.includes(LabelKey.color) && (output.color = this.color)
    keys.includes(LabelKey.idUser) && (output.idUser = this.idUser)
    keys.includes(LabelKey.idBoard) && (output.idBoard = this.idBoard)

    return output
  }


  static items: Label[] = []
   
  static one(id: string) {
    const item = this.items.find(item => item.id === id)

    if (item) {
      return item
    }

    throw new Error(404, "Not Found!")
  }
}


export default Label