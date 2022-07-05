import {v4} from "uuid"
import {User} from "./User.js"
import {Error} from "../Error.js"
import {Board} from "./Board.js"
import {ARRAY} from "format"
import {OBJECT} from "format"
import {STRING} from "format"


export enum LabelKey {
  id = "id",
  name = "name",
  color = "color",
  idUser = "idUser",
  idBoard = "idBoard",
}

export type LabelName = (
  | null 
  | string
)

export enum LabelColor {
  SKY = "sky", 
  RED = "red", 
  LIME = "lime", 
  BLUE = "blue", 
  DARK = "dark", 
  PINK = "pink", 
  CYAN = "cyan", 
  GREEN = "green", 
  PURPLE = "purple", 
  INDIGO = "indigo", 
  ORANGE = "orange", 
  YELLOW = "yellow",
}

export interface LabelProjector {
  keys: LabelKey[]
}

export type LabelProjection = {
  id?: undefined | Label["id"]
  name?: undefined | Label["name"]
  color?: undefined | Label["color"]
  idUser?: undefined | Label["idUser"]
  idBoard?: undefined | Label["idBoard"]
}

export type LabelInitializer = {
  name: LabelName
  color: LabelColor
}

export const LABEL_KEY = (
  /^(|id|name|color|idUser|idBoard)$/u
)

export const LABEL_PROJECTOR = OBJECT({
  keys: ARRAY([
    STRING({trim: "both", pattern: LABEL_KEY}),
  ]),
}, {
  name: "LABEL_PROJECTOR",
  error: "LABEL: INVALID_PROJECTOR",
})

export const LABEL_PROJECT_REQUEST = OBJECT({
  id: STRING(),
  projector: LABEL_PROJECTOR,
}, {
  name: "LABEL_PROJECT_REQUEST",
  error: "LABEL: INVALID_PROJECT_REQUEST",
})

export class Label {
  id: string
  name: LabelName
  color: LabelColor
  idUser: string
  idBoard: string


  constructor(board: Board, initializer: LabelInitializer) {
    this.id = v4()
    this.name = initializer.name
    this.color = initializer.color
    this.idUser = board.idUser
    this.idBoard = board.id
    board.idLabels.add(this.id)
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