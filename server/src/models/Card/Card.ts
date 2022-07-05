import {v4} from "uuid"
import {User} from "../User/User.js"
import {List} from "../List/List.js"
import {Error} from "../../Error.js"
import {Board} from "../Board/Board.js"
import {Label} from "../Label/Label.js"
import {CardKey} from "./CardKey.js"
import {Checklist} from "../Checklist/Checklist.js"
import {Checkitem} from "../Checkitem/Checkitem.js"
import {CardProjector} from "./CardProjector.js"
import {CardProjection} from "./CardProjection.js"
import {CardInitializer} from "./CardInitializer.js"


export class Card {
  id: string
  title: string
  idUser: string
  idList: string
  idBoard: string
  dateDue: number | null
  idLabels: string[]
  dateStart: number | null
  isWatched: boolean
  isComplete: boolean
  description: string | null
  dateCreation: number
  dateLastView: number | null
  idChecklists: string[]


  constructor(list: List, initializer: CardInitializer) {
    this.id = v4()
    this.title = initializer.title
    this.idUser = list.idUser
    this.idList = list.id
    this.idBoard = list.idBoard
    this.dateDue = initializer.dateDue
    this.idLabels = initializer.idLabels
    this.dateStart = initializer.dateStart
    this.isWatched = initializer.isWatched
    this.isComplete = initializer.isComplete
    this.description = initializer.description
    this.dateCreation = initializer.dateCreation
    this.dateLastView = initializer.dateLastView
    this.idChecklists = []
    list.idCards.push(this.id)
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
    return Label.items.filter(label => this.idLabels.includes(label.id))
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