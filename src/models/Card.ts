import {v4} from "uuid"
import {User} from "./User.js"
import {List} from "./List.js"
import {Error} from "../Error.js"
import {Board} from "./Board.js"
import {Label} from "./Label.js"
import {ARRAY} from "format"
import {STRING} from "format"
import {OBJECT} from "format"
import {Checklist} from "./Checklist.js"
import {Checkitem} from "./Checkitem.js"
import {CHECKLIST_PROJECTOR} from "./Checklist.js"
import {CHECKITEM_PROJECTOR} from "./Checkitem.js"
import {CheckitemProjector} from "./Checkitem.js"
import {ChecklistProjector} from "./Checklist.js"
import {ChecklistProjection} from "./Checklist.js"
import {CheckitemProjection} from "./Checkitem.js"


export type CardInitializer = {
  title: string
  dateDue: number | null
  idLabels: string[]
  dateStart: number | null
  isWatched: boolean
  isComplete: boolean
  description: string | null
  dateCreation: number
  dateLastView: number | null
}

export interface CardProjector {
  keys: CardKey[]
  checklists?: undefined | ChecklistProjector
  checkitems?: undefined | CheckitemProjector
}

export interface CardProjection {
  id?: undefined | string
  title?: undefined | string
  idUser?: undefined | string
  idList?: undefined | string
  idBoard?: undefined | string
  dateDue?: undefined | number | null
  idLabels?: undefined | string[]
  dateStart?: undefined | number | null
  isWatched?: undefined | boolean
  isComplete?: undefined | boolean
  checklists?: undefined | ChecklistProjection[]
  checkitems?: undefined | CheckitemProjection[]
  description?: undefined | string | null
  idChecklists?: undefined | string
  dateCreation?: undefined | number
  dateLastView?: undefined | number | null
}

export enum CardKey {
  id = "id",
  title = "title",
  idUser = "idUser",
  idList = "idList",
  idBoard = "idBoard",
  dateDue = "dateDue",
  idLabels = "idLabels",
  dateStart = "dateStart",
  isWatched = "isWatched",
  isComplete = "isComplete",
  description = "description",
  dateCreation = "dateCreation",
  dateLastView = "dateLastView",
  idChecklists = "idChecklists",  
}

export const CARD_KEY = (
  /^(id|title|idUser|idList|dateDue|idBoard|idLabels|dateStart|isWatched|isComplete|description|idChecklists|dateCreation|dateLastView)$/u
)

export const CARD_PROJECTOR = OBJECT({
  keys: ARRAY([STRING({trim: "both", pattern: CARD_KEY})]),
  checklists: CHECKLIST_PROJECTOR.copy({optional: true}),
  checkitems: CHECKITEM_PROJECTOR.copy({optional: true}),
}, {
  name: "CARD_PROJECTOR",
  error: "CARD: INVALID_PROJECTOR",
})

export const CARD_PROJECT_REQUEST = OBJECT({
  id: STRING(),
  projector: CARD_PROJECTOR,
}, {
  name: "CARD_PROJECT_REQUEST",
  error: "CARD: INVALID_PROJECT_REQUEST",
})

export class Card {
  id: string
  title: string
  idUser: string
  idList: string
  idBoard: string
  dateDue: number | null
  idLabels: Set<string>
  dateStart: number | null
  isWatched: boolean
  isComplete: boolean
  description: string | null
  dateCreation: number
  dateLastView: number | null
  idChecklists: Set<string>


  constructor(list: List, initializer: CardInitializer) {
    this.id = v4()
    this.title = initializer.title
    this.idUser = list.idUser
    this.idList = list.id
    this.idBoard = list.idBoard
    this.dateDue = initializer.dateDue
    this.idLabels = new Set(initializer.idLabels)
    this.dateStart = initializer.dateStart
    this.isWatched = initializer.isWatched
    this.isComplete = initializer.isComplete
    this.description = initializer.description
    this.dateCreation = initializer.dateCreation
    this.dateLastView = initializer.dateLastView
    this.idChecklists = new Set()
    list.idCards.add(this.id)
    Card.items.push(this)
  }


  get user() {
    return User.items.find(user => user.id === this.idUser)
  }

  get list() {
    return List.items.find(list => list.id === this.idList)
  }

  get board() {
    return Board.items.find(board => board.id === this.idBoard)
  }

  get labels() {
    return Label.items.filter(label => this.idLabels.has(label.id))
  }

  get checklists() {
    return Checklist.items.filter(checklist => checklist.idCard === this.id)
  }
  
  get checkitems() {
    return Checkitem.items.filter(checkitem => checkitem.idCard === this.id)
  }

  
  project({keys, checklists, checkitems}: CardProjector) {
    const output: CardProjection = {}
  
    keys.includes(CardKey.id) && (output.id = this.id)
    keys.includes(CardKey.title) && (output.title = this.title)
    keys.includes(CardKey.idUser) && (output.idUser = this.idUser)
    keys.includes(CardKey.idList) && (output.idList = this.idList)
    keys.includes(CardKey.idBoard) && (output.idBoard = this.idBoard)
    keys.includes(CardKey.dateDue) && (output.dateDue = this.dateDue)
    keys.includes(CardKey.idLabels) && (output.idLabels = [...this.idLabels])
    keys.includes(CardKey.dateStart) && (output.dateStart = this.dateStart)
    keys.includes(CardKey.isWatched) && (output.isWatched = this.isWatched)
    keys.includes(CardKey.isComplete) && (output.isComplete = this.isComplete)
    keys.includes(CardKey.description) && (output.description = this.description)
    keys.includes(CardKey.dateCreation) && (output.dateCreation = this.dateCreation)
    keys.includes(CardKey.dateLastView) && (output.dateLastView = this.dateLastView)
    
    checklists && (output.checklists = this.checklists.map(checklist => checklist.project(checklists)))
    checkitems && (output.checkitems = this.checkitems.map(checkitem => checkitem.project(checkitems)))
  
    return output
  }


  static items: Card[] = []
   
  static one(id: string) {
    const item = this.items.find(item => item.id === id)

    if (item) {
      return item
    }

    throw new Error(404, "Not Found!")
  }
}


export default Card