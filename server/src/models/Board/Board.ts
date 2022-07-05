import {v4} from "uuid"
import {User} from "../User/User.js"
import {List} from "../List/List.js"
import {Card} from "../Card/Card.js"
import {Error} from "../../Error.js"
import {Label} from "../Label/Label.js"
import {BoardKey} from "./BoardKey.js"
import {Checklist} from "../Checklist/Checklist.js"
import {Checkitem} from "../Checkitem/Checkitem.js"
import {BoardTheme} from "./BoardTheme.js"
import {BoardProjector} from "./BoardProjector.js"
import {BoardProjection} from "./BoardProjection.js"
import {BoardInitializer} from "./BoardInitializer.js"


export class Board {
  id: string
  title: string
  theme: BoardTheme
  idUser: string
  idLists: string[]
  idLabels: string[]
  isStarred: boolean
  dateCreation: number
  dateLastView: number
  dateLastActivity: number


  constructor(user: User, initializer: BoardInitializer) {
    this.id = v4()
    this.title = initializer.title
    this.theme = initializer.theme
    this.idUser = user.id
    this.idLists = []
    this.idLabels = []
    this.isStarred = initializer.isStarred
    this.dateCreation = initializer.dateCreation
    this.dateLastView = initializer.dateLastView
    this.dateLastActivity = initializer.dateLastActivity
    user.idBoards.push(this.id)
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