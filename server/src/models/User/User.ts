import {v4} from "uuid"
import {List} from "../List/List.js"
import {Card} from "../Card/Card.js"
import {Board} from "../Board/Board.js"
import {Label} from "../Label/Label.js"
import {Error} from "../../Error.js"
import {UserKey} from "./UserKey.js"
import {Checklist} from "../Checklist/Checklist.js"
import {Checkitem} from "../Checkitem/Checkitem.js"
import {UserProjector} from "./UserProjector.js"
import {UserProjection} from "./UserProjection.js"
import {UserInitializer} from "./UserInitializer.js"


export class User {
  id: string
  avatar: string | null
  idBoards: string[]
  username: string
  lastname: string
  initials: string
  password: string
  firstname: string


  constructor(initializer: UserInitializer) {
    this.id = v4()
    this.avatar = initializer.avatar
    this.idBoards = []
    this.username = initializer.username
    this.lastname = initializer.lastname
    this.initials = initializer.initials
    this.password = initializer.password
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