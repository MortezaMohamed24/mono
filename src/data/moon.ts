import {User} from "../models/User.js"
import {List} from "../models/List.js"
import {Card} from "../models/Card.js"
import {Board} from "../models/Board.js"
import {Theme} from "../models/Board.js"
import {Label} from "../models/Label.js"
import {Checklist} from "../models/Checklist.js"
import {Checkitem} from "../models/Checkitem.js"


const user = new User({
  avatar: null,
  username: "bluemoon",
  initials: "bb",
  lastname: "moon",
  firstname: "blue"
})

const booksBoard = new Board(user, {
  title: "Books",
  theme: Theme.BLUE,
  isStarred: true,
  dateCreation: new Date(2020, 7, 4).getTime(),
  dateLastView: new Date(2020, 7, 4).getTime(),
  dateLastActivity: new Date(2020, 7, 4).getTime(),
})

const plansBoard = new Board(user, {
  title: "Plans",
  theme: Theme.RED,
  isStarred: true,
  dateCreation: new Date(2020, 7, 4).getTime(),
  dateLastView: new Date(2020, 7, 4).getTime(),
  dateLastActivity: new Date(2020, 7, 4).getTime(),
})

const meetingsBoard = new Board(user, {
  title: "Books",
  theme: Theme.BLUE,
  isStarred: true,
  dateCreation: new Date(2020, 7, 4).getTime(),
  dateLastView: new Date(2020, 7, 4).getTime(),
  dateLastActivity: new Date(2020, 7, 4).getTime(),
})