import {v4} from "uuid"
import {User} from "./User.js"
import {List} from "./List.js"
import {Card} from "./Card.js"
import {Error} from "../Error.js"
import {Label} from "./Label.js"
import {ARRAY} from "format"
import {OBJECT} from "format"
import {STRING} from "format"
import {Checklist} from "./Checklist.js"
import {Checkitem} from "./Checkitem.js"
import {ListProjector} from "./List.js"
import {CardProjector} from "./Card.js"
import {LIST_PROJECTOR} from "./List.js"
import {CARD_PROJECTOR} from "./Card.js"
import {LabelProjector} from "./Label.js"
import {ListProjection} from "./List.js"
import {CardProjection} from "./Card.js"
import {LabelProjection} from "./Label.js"
import {LABEL_PROJECTOR} from "./Label.js"
import {ChecklistProjector} from "./Checklist.js"
import {CheckitemProjector} from "./Checkitem.js"
import {ChecklistProjection} from "./Checklist.js"
import {CheckitemProjection} from "./Checkitem.js"
import {CHECKLIST_PROJECTOR} from "./Checklist.js"
import {CHECKITEM_PROJECTOR} from "./Checkitem.js"


export enum BoardKey {
  id = "id",
  title = "title",
  theme = "theme",
  idUser = "idUser",
  idLists = "idLists",
  idLabels = "idLabels",
  isStarred = "isStarred",
  dateCreation = "dateCreation",
  dateLastView = "dateLastView",
  dateLastActivity = "dateLastActivity",
}

export enum BoardTheme {
  SKY = "sky",
  RED = "red", 
  LIME = "lime", 
  BLUE = "blue", 
  CYAN = "cyan", 
  DARK = "dark", 
  PINK = "pink", 
  DREEN = "green", 
  ORANGE = "orange", 
  INDIGO = "indigo", 
  PURPLE = "purple", 
}

export type BoardProjector = {
  keys: BoardKey[]
  lists?: undefined | ListProjector
  cards?: undefined | CardProjector
  labels?: undefined | LabelProjector
  checklists?: undefined | ChecklistProjector
  checkitems?: undefined | CheckitemProjector
}

export type BoardProjection = {
  id?: undefined | Board["id"]
  title?: undefined | Board["title"]
  theme?: undefined | Board["theme"]
  lists?: undefined | ListProjection[]
  cards?: undefined | CardProjection[]
  idUser?: undefined | Board["idUser"]
  labels?: undefined | LabelProjection[]
  idLists?: undefined | Board["idLists"]
  idLabels?: undefined | Board["idLabels"]
  isStarred?: undefined | Board["isStarred"]
  checklists?: undefined | ChecklistProjection[]
  checkitems?: undefined | CheckitemProjection[]
  dateCreation?: undefined | Board["dateCreation"]
  dateLastView?: undefined | Board["dateLastView"]
  dateLastActivity?: undefined | Board["dateLastActivity"]
}

export type BoardInitializer = {
  title: string
  theme: BoardTheme
  isStarred: boolean
  dateCreation: number
  dateLastView: number
  dateLastActivity: number
}

export const BOARD_KEY = (
  /^(id|title|theme|idUser|idLists|idLabels|isStarred|dateCreation|dateLastView|dateLastActivity)$/u
)

export const BOARD_PROJECTOR = OBJECT({
  keys: ARRAY([STRING({trim: "both", pattern: BOARD_KEY})]),
  lists: LIST_PROJECTOR.copy({optional: true}),
  cards: CARD_PROJECTOR.copy({optional: true}),
  labels: LABEL_PROJECTOR.copy({optional: true}),
  checklists: CHECKLIST_PROJECTOR.copy({optional: true}),
  checkitems: CHECKITEM_PROJECTOR.copy({optional: true}),
})

export const BOARD_PROJECT_REQUEST = OBJECT({
  id: STRING(),
  projector: BOARD_PROJECTOR,
}, {
  name: "BOARD_PROJECT_REQUEST",
  error: "BOARD: INVALID_PROJECT_REQUEST",
})

export class Board {
  id: string
  title: string
  theme: BoardTheme
  idUser: string
  idLists: Set<string>
  idLabels: Set<string>
  isStarred: boolean
  dateCreation: number
  dateLastView: number
  dateLastActivity: number


  constructor(user: User, initializer: BoardInitializer) {
    this.id = v4()
    this.title = initializer.title
    this.theme = initializer.theme
    this.idUser = user.id
    this.idLists = new Set()
    this.idLabels = new Set()
    this.isStarred = initializer.isStarred
    this.dateCreation = initializer.dateCreation
    this.dateLastView = initializer.dateLastView
    this.dateLastActivity = initializer.dateLastActivity
    user.idBoards.add(this.id)
    Board.items.push(this)
  }

  
  get user() {
    return User.items.find(user => user.id === this.idUser)
  }

  get lists() {
    return List.items.filter(list => list.idBoard === this.id)
  }

  get cards() {
    return Card.items.filter(card => card.idBoard === this.id)
  }

  get labels() {
    return Label.items.filter(label => label.idBoard === this.id)
  }

  get checklists() {
    return Checklist.items.filter(checklist => checklist.idBoard === this.id)
  }
  
  get checkitems() {
    return Checkitem.items.filter(checkitem => checkitem.idBoard === this.id)
  }


  project({keys, lists, cards, labels, checklists, checkitems}: BoardProjector) {
    const output: BoardProjection = {}
  
    keys.includes(BoardKey.id) && (output.id = this.id)
    keys.includes(BoardKey.title) && (output.title = this.title)
    keys.includes(BoardKey.theme) && (output.theme = this.theme)
    keys.includes(BoardKey.idUser) && (output.idUser = this.idUser)
    keys.includes(BoardKey.isStarred) && (output.isStarred = this.isStarred)
    keys.includes(BoardKey.dateCreation) && (output.dateCreation = this.dateCreation)
    keys.includes(BoardKey.dateLastView) && (output.dateLastView = this.dateLastView)
    keys.includes(BoardKey.dateLastActivity) && (output.dateLastActivity = this.dateLastActivity)
    
    lists && (output.lists = this.lists.map(list => list.project(lists)))
    cards && (output.cards = this.cards.map(card => card.project(cards)))
    labels && (output.labels = this.labels.map(label => label.project(labels)))
    checklists && (output.checklists = this.checklists.map(checklist => checklist.project(checklists)))
    checkitems && (output.checkitems = this.checkitems.map(checkitem => checkitem.project(checkitems)))
  
    return output
  }


  static items: Board[] = []

  
  static one(id: string) {
    const item = this.items.find(item => item.id === id)

    if (item) {
      return item
    }

    throw new Error(404, "Not Found!")
  }
}


export default Board