import {v4} from "uuid"
import {User} from "./User.js"
import {Card} from "./Card.js"
import {Board} from "./Board.js"
import {Label} from "./Label.js"
import {Error} from "../Error.js"
import {ARRAY} from "format"
import {OBJECT} from "format"
import {STRING} from "format"
import {Checklist} from "./Checklist.js"
import {Checkitem} from "./Checkitem.js"
import {CardProjector} from "./Card.js"
import {CardProjection} from "./Card.js"
import {CARD_PROJECTOR} from "./Card.js"
import {CHECKLIST_PROJECTOR} from "./Checklist.js"
import {CHECKITEM_PROJECTOR} from "./Checkitem.js"
import {ChecklistProjector} from "./Checklist.js"
import {CheckitemProjector} from "./Checkitem.js"
import {ChecklistProjection} from "./Checklist.js"
import {CheckitemProjection} from "./Checkitem.js"


export enum ListKey {
  id = "id",
  title = "title",
  idUser = "idUser",
  idBoard = "idBoard",
  idCards = "idCards",
  isWatched = "isWatched",
  sortMethod = "sortMethod",
}

export enum SortMethod {
  /**  A Cards sort method. */
  DATE_CREATED_ASCENDING = "DATE_CREATED_ASCENDING",
  /**  A Cards sort method. */
  DATE_CREATED_DESCENDING = "DATE_CREATED_DESCENDING",
  /**  A Cards sort method. */
  ALPHABETICALLY_ASCENDING = "ALPHABETICALLY_ASCENDING",
  /**  A Cards sort method. */
  ALPHABETICALLY_DESCENDING = "ALPHABETICALLY_DESCENDING",
}

export type ListProjector = {
  keys: ListKey[]
  cards?: CardProjector
  checklists?: ChecklistProjector
  checkitems?: CheckitemProjector
}

export type ListProjection = {
  id?: undefined | string
  title?: undefined | string
  cards?: undefined | CardProjection[]
  idUser?: undefined | string
  idCards?: undefined | string
  idBoard?: undefined | string
  isWatched?: undefined | boolean
  sortMethod?: undefined | SortMethod
  checklists?: undefined | ChecklistProjection[]
  checkitems?: undefined | CheckitemProjection[]
}

export type ListInitializer = {
  title: string
  isWatched: boolean
  sortMethod: SortMethod
}

export const KEY = (
  /^(id|title|idUser|idBoard|idCards|isWatched|sortMethod)$/u
)

export const LIST_PROJECTOR = OBJECT({
  keys: ARRAY([STRING({trim: "both", pattern: KEY})]),
  cards: CARD_PROJECTOR.copy({optional: true}),
  checklists: CHECKLIST_PROJECTOR.copy({optional: true}),
  checkitems: CHECKITEM_PROJECTOR.copy({optional: true}),
}, {
  name: "LIST_PROJECTOR",
  error: "LIST: INVALID_PROJECTOR",
})

export const LIST_PROJECT_REQUEST = OBJECT({
  id: STRING(),
  projector: LIST_PROJECTOR,
}, {
  name: "LIST_PROJECT_REQUEST",
  error: "LIST: INVALID_PROJECT_REQUEST",
})

export class List {
  id: string
  title: string
  idUser: string
  idBoard: string
  idCards: Set<string>
  isWatched: boolean
  sortMethod: SortMethod


  constructor(board: Board, initializer: ListInitializer) {
    this.id = v4()
    this.title = initializer.title
    this.idUser = board.idUser
    this.idBoard = board.id
    this.idCards = new Set()
    this.isWatched = initializer.isWatched
    this.sortMethod = initializer.sortMethod
    board.idLists.add(this.id)
    List.items.push(this)
  }

  
  get user() {
    return User.items.find(user => user.id === this.idUser)
  }

  get board() {
    return Board.items.find(board => board.id === this.idBoard)
  }

  get cards() {
    return Card.items.filter(card => card.idList === this.id)
  }

  get labels() {
    const idLabels = new Set(...this.cards.map(card => card.idLabels))
    return Label.items.filter(label => idLabels.has(label.id))
  }

  get checklists() {
    return Checklist.items.filter(checklist => checklist.idList === this.id)
  }
  
  get checkitems() {
    return Checkitem.items.filter(checkitem => checkitem.idList === this.id)
  }


  project({keys, cards, checklists, checkitems}: ListProjector) {
    const output: ListProjection = {}
  
    keys.includes(ListKey.id) && (output.id = this.id)
    keys.includes(ListKey.title) && (output.title = this.title)
    keys.includes(ListKey.idUser) && (output.idUser = this.idUser)
    keys.includes(ListKey.idBoard) && (output.idBoard = this.idBoard)
    keys.includes(ListKey.isWatched) && (output.isWatched = this.isWatched)
    keys.includes(ListKey.sortMethod) && (output.sortMethod = this.sortMethod)
  
    cards && (output.cards = this.cards.map(card => card.project(cards)))
    checklists && (output.checklists = this.checklists.map(checklist => checklist.project(checklists)))
    checkitems && (output.checkitems = this.checkitems.map(checkitem => checkitem.project(checkitems)))
    
    return output
  }


  static items: List[] = []
   
  static one(id: string) {
    const item = this.items.find(item => item.id === id)

    if (item) {
      return item
    }

    throw new Error(404, "Not Found!")
  }
}


export default List