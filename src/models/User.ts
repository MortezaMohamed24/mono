import {v4} from "uuid"
import {List} from "./List.js"
import {Card} from "./Card.js"
import {Board} from "./Board.js"
import {Label} from "./Label.js"
import {Error} from "../Error.js"
import {ARRAY} from "format"
import {OBJECT} from "format"
import {STRING} from "format"
import {Checklist} from "./Checklist.js"
import {Checkitem} from "./Checkitem.js"
import {ListProjector} from "./List.js"
import {CardProjector} from "./Card.js"
import {BoardProjector} from "./Board.js"
import {LabelProjector} from "./Label.js"
import {ListProjection} from "./List.js"
import {CardProjection} from "./Card.js"
import {LIST_PROJECTOR} from "./List.js"
import {CARD_PROJECTOR} from "./Card.js"
import {BoardProjection} from "./Board.js"
import {LabelProjection} from "./Label.js"
import {BOARD_PROJECTOR} from "./Board.js"
import {LABEL_PROJECTOR} from "./Label.js"
import {ChecklistProjector} from "./Checklist.js"
import {CheckitemProjector} from "./Checkitem.js"
import {ChecklistProjection} from "./Checklist.js"
import {CheckitemProjection} from "./Checkitem.js"
import {CHECKLIST_PROJECTOR} from "./Checklist.js"
import {CHECKITEM_PROJECTOR} from "./Checkitem.js"


export enum UserKey {
  id = "id",
  avatar = "avatar",
  idBoards = "idBoards",
  username = "username",
  lastname = "lastname",
  initials = "initials",
  firstname = "firstname",
}

export type UserProjector = {
  keys: UserKey[]
  lists?: undefined | ListProjector
  cards?: undefined | CardProjector
  boards?: undefined | BoardProjector
  labels?: undefined | LabelProjector
  checklists?: undefined | ChecklistProjector
  checkitems?: undefined | CheckitemProjector
}

export type UserProjection = {
  id?: undefined | User["id"]
  lists?: undefined | ListProjection[]
  cards?: undefined | CardProjection[]
  boards?: undefined | BoardProjection[]
  labels?: undefined | LabelProjection[]
  avatar?: undefined | User["avatar"]
  idBoards?: undefined | User["idBoards"]
  username?: undefined | User["username"]
  lastname?: undefined | User["lastname"]
  initials?: undefined | User["initials"]
  firstname?: undefined | User["firstname"]
  checklists?: undefined | ChecklistProjection[]
  checkitems?: undefined | CheckitemProjection[]
}

export type UserInitializer = {
  avatar: string | null
  username: string
  lastname: string
  initials: string
  firstname: string
}

export const USER_KEY = (
  /^(id|avatar|idBoards|username|lastname|initials|password|firstname)$/u
)

export const USER_PROJECTOR = OBJECT({
  keys: ARRAY([STRING({trim: "both", pattern: USER_KEY})]),
  lists: LIST_PROJECTOR.copy({optional: true}),
  cards: CARD_PROJECTOR.copy({optional: true}),
  boards: BOARD_PROJECTOR.copy({optional: true}),
  labels: LABEL_PROJECTOR.copy({optional: true}),
  checklists: CHECKLIST_PROJECTOR.copy({optional: true}),
  checkitems: CHECKITEM_PROJECTOR.copy({optional: true}),
}, {
  name: "USER_PROJECTOR",
  error: "USER: INVALID_PROJECTOR",
})

export const USER_PROJECT_REQUEST = OBJECT({
  id: STRING(),
  projector: USER_PROJECTOR,
}, {
  name: "USER_PROJECT_REQUEST",
  error: "USER: INVALID_PROJECT_REQUEST",
})

export class User {
  id: string
  avatar: string | null
  idBoards: Set<string>
  username: string
  lastname: string
  initials: string
  firstname: string


  constructor(initializer: UserInitializer) {
    this.id = v4()
    this.avatar = initializer.avatar
    this.idBoards = new Set()
    this.username = initializer.username
    this.lastname = initializer.lastname
    this.initials = initializer.initials
    this.firstname = initializer.firstname
    User.items.push(this)
  }


  get lists() {
    return List.items.filter(list => list.idUser === this.id)
  }

  get cards() {
    return Card.items.filter(card => card.idUser === this.id)
  }

  get boards() {
    return Board.items.filter(board => board.idUser === this.id)
  }

  get labels() {
    return Label.items.filter(label => label.idUser === this.id)
  }

  get checklists() {
    return Checklist.items.filter(checklist => checklist.idUser === this.id)
  }
  
  get checkitems() {
    return Checkitem.items.filter(checkitem => checkitem.idUser === this.id)
  }


  project({keys, lists, cards, boards, labels, checkitems, checklists}: UserProjector) {
    const output: UserProjection = {}
  
    keys.includes(UserKey.id) && (output.id = this.id)
    keys.includes(UserKey.avatar) && (output.avatar = this.avatar)
    keys.includes(UserKey.username) && (output.username = this.username)
    keys.includes(UserKey.lastname) && (output.lastname = this.lastname)
    keys.includes(UserKey.initials) && (output.initials = this.initials)
    keys.includes(UserKey.firstname) && (output.firstname = this.firstname)
  
    lists && (output.lists = this.lists.map(list => list.project(lists)))
    cards && (output.cards = this.cards.map(card => card.project(cards)))
    boards && (output.boards = this.boards.map(board => board.project(boards)))
    labels && (output.labels = this.labels.map(label => label.project(labels)))
    checklists && (output.checklists = this.checklists.map(checklist => checklist.project(checklists)))
    checkitems && (output.checkitems = this.checkitems.map(checkitem => checkitem.project(checkitems)))
  
    return output
  }


  static items: User[] = []
 
  static one(id: string) {
    const item = this.items.find(item => item.id === id)

    if (item) {
      return item
    }

    throw new Error(404, "Not Found!")
  }
}


export default User