import {User} from "../models/User/User.js"
import {List} from "../models/List/List.js"
import {Card} from "../models/Card/Card.js"
import {Board} from "../models/Board/Board.js"
import {Label} from "../models/Label/Label.js"
import {Checklist} from "../models/Checklist/Checklist.js"
import {Checkitem} from "../models/Checkitem/Checkitem.js"
import {BoardTheme} from "../models/Board/BoardTheme.js"
import {LabelColor} from "../models/Label/LabelColor.js"
import {ListSortMethod} from "../models/List/ListSortMethod.js"


const user = new User({
  avatar: null,
  username: "bluemoon",
  initials: "bb",
  lastname: "moon",
  password: "MikasaShouldHaveBeenMine",
  firstname: "blue",
})

const moon_books = new Board(user, {
  title: "Books",
  theme: BoardTheme.BLUE,
  isStarred: true,
  dateCreation: new Date(2020, 7, 4).getTime(),
  dateLastView: new Date(2020, 7, 4).getTime(),
  dateLastActivity: new Date(2020, 7, 4).getTime(),
})

const moon_books_sky = new Label(moon_books, {
  name: "sky",
  color: LabelColor.SKY,
})

const moon_books_red = new Label(moon_books, {
  name: "red",
  color: LabelColor.RED,
})

const moon_books_lime = new Label(moon_books, {
  name: "lime",
  color: LabelColor.LIME,
})

const moon_books_blue = new Label(moon_books, {
  name: "blue",
  color: LabelColor.BLUE,
})

const moon_books_dark = new Label(moon_books, {
  name: "dark",
  color: LabelColor.DARK,
})

const moon_books_pink = new Label(moon_books, {
  name: "pink",
  color: LabelColor.PINK,
})

const moon_books_cyan = new Label(moon_books, {
  name: "cyan",
  color: LabelColor.CYAN,
})

const moon_books_green = new Label(moon_books, {
  name: "green",
  color: LabelColor.GREEN,
})

const moon_books_purple = new Label(moon_books, {
  name: "purple",
  color: LabelColor.PURPLE,
})

const moon_books_indigo = new Label(moon_books, {
  name: "indigo",
  color: LabelColor.INDIGO,
})

const moon_books_orange = new Label(moon_books, {
  name: "orange",
  color: LabelColor.ORANGE,
})

const moon_books_yellow = new Label(moon_books, {
  name: "yellow",
  color: LabelColor.YELLOW,
})

const moon_books_science = new List(moon_books, {
  title: "Science",
  isWatched: true,
  sortMethod: ListSortMethod.DATE_CREATED_ASCENDING,
})

const moon_books_science_card1 = new Card(moon_books_science, {
  title: "Book 1",
  dateDue: null,
  idLabels: [],
  dateStart: null,
  isWatched: true,
  isComplete: false,
  description: "Here goes the description for this card",
  dateCreation: new Date(2020, 2, 5).getTime(),
  dateLastView: Date.now(),
})

const moon_books_science_card2 = new Card(moon_books_science, {
  title: "Book 2",
  dateDue: null,
  idLabels: [],
  dateStart: null,
  isWatched: true,
  isComplete: false,
  description: "Here goes the description for this card",
  dateCreation: new Date(2020, 2, 5).getTime(),
  dateLastView: Date.now(),
})

const moon_books_science_card3 = new Card(moon_books_science, {
  title: "Book 3",
  dateDue: null,
  idLabels: [],
  dateStart: null,
  isWatched: true,
  isComplete: false,
  description: "Here goes the description for this card",
  dateCreation: new Date(2020, 2, 5).getTime(),
  dateLastView: Date.now(),
})

const moon_plans = new Board(user, {
  title: "Plans",
  theme: BoardTheme.RED,
  isStarred: true,
  dateCreation: new Date(2020, 7, 4).getTime(),
  dateLastView: new Date(2020, 7, 4).getTime(),
  dateLastActivity: new Date(2020, 7, 4).getTime(),
})

const moon_meetings = new Board(user, {
  title: "Books",
  theme: BoardTheme.BLUE,
  isStarred: true,
  dateCreation: new Date(2020, 7, 4).getTime(),
  dateLastView: new Date(2020, 7, 4).getTime(),
  dateLastActivity: new Date(2020, 7, 4).getTime(),
})

