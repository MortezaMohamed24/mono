import User from "../models/User.js"
import List from "../models/List.js"
import Card from "../models/Card.js"
import Board from "../models/Board.js"
import Label from "../models/Label.js"
import Checkitem from "../models/Checkitem.js"
import Checklist from "../models/Checklist.js"
import {USER_PROJECT_REQUEST} from "../models/User.js"
import {LIST_PROJECT_REQUEST} from "../models/List.js"
import {CARD_PROJECT_REQUEST} from "../models/Card.js"
import {BOARD_PROJECT_REQUEST} from "../models/Board.js"
import {LABEL_PROJECT_REQUEST} from "../models/Label.js"
import {CHECKITEM_PROJECT_REQUEST} from "../models/Checkitem.js"
import {CHECKLIST_PROJECT_REQUEST} from "../models/Checklist.js"

import session from "express-session"
import {STATUS_CODES} from "http"
import {Error} from "../Error.js"
import express from "express"
import log from "morgan"
import Virtuals from "serve-virtual"


const app = express()



app.use(log(
  "common"
))

app.use(express.json({
  type: "application/json"
}))

app.use(express.urlencoded({
  extended: false,
}))

app.use(Virtuals({
  // TODO: Define the base url
  base: "",
  paths: [
    // "/"
    [/^\/$/, "/index.html"], 
    // "/home"
    [/^\/home?$/, "/index.html"], 
    // "/cards/idCard"
    [/^\/cards\/\w+$/, "/index.html"], 
    // "/boards/idBoard"
    [/^\/boards\/\w+$/, "/index.html"], 
    // "/login" || "/login/index" || "/login/index.html"
    [/^\/login(\/index(\.html)?)?$/, "/index.html"], 
    // "/login/error" || "/login/error/index" || "/login/error/index.html"
    [/^\/login\/error(\/index(\.html)?)?$/, "/index.html"], 
    // "/signup" || "/signup/index" || "/signup/index.html"
    [/^\/signup(\/index(\.html)?)?$/, "/index.html"], 
    // "/signup/error" || "/signup/error/index" || "/signup/error/index.html"
    [/^\/signup\/error(\/index(\.html)?)?$/, "/index.html"], 
    // "/main.bundle.js"
    [/^\/main\.bundle\.js$/, "/main.bundle.js"],
  ]  
}))

app.use(session({
  secret: "Cat",
  resave: false,
  cookie: {maxAge: 1000 * 60 * 60 * 24 * 15},
  saveUninitialized: true,
}))

app.get("/api/user/project", (request, response, proceed) => {
  const body = USER_PROJECT_REQUEST(request.body, {strict: true})
  const user = User.one(body.id)

  response.status(200)
  response.send(user.project(body.projector))
})

app.post("/api/user/create", (request, response, proceed) => {
  response.status(200).send("OK")
})

app.patch("/api/user/edit", (request, response, proceed) => {
  response.status(200).send("OK")
})

app.delete("/api/user/destroy", (request, response, proceed) => {
  response.status(200).send("OK")
})

app.get("/api/board/project", (request, response, proceed) => {
  const body = BOARD_PROJECT_REQUEST(request.body, {strict: true})
  const board = Board.one(body.id)

  response.status(200)
  response.send(board.project(body.projector))
})

app.post("/api/board/create", (request, response, proceed) => {
  response.status(200).send("OK")
})

app.patch("/api/board/edit", (request, response, proceed) => {
  response.status(200).send("OK")
})

app.delete("/api/board/destroy", (request, response, proceed) => {
  response.status(200).send("OK")
})

app.get("/api/label/project", (request, response, proceed) => {
  const body = LABEL_PROJECT_REQUEST(request.body, {strict: true})
  const label = Label.one(body.id)

  response.status(200)
  response.send(label.project(body.projector))
})

app.post("/api/label/create", (request, response, proceed) => {
  response.status(200).send("OK")
})

app.patch("/api/label/edit", (request, response, proceed) => {
  response.status(200).send("OK")
})

app.delete("/api/label/destroy", (request, response, proceed) => {
  response.status(200).send("OK")
})

app.get("/apl/list/project", (request, response, proceed) => {
  response.status(200).send("OK")
})

app.post("/apl/list/copy", (request, response, proceed) => {
  response.status(200).send("OK")
})

app.post("/apl/list/create", (request, response, proceed) => {
  response.status(200).send("OK")
})

app.post("/apl/list/copyAllOwnCards", (request, response, proceed) => {
  response.status(200).send("OK")
})

app.patch("/apl/list/move", (request, response, proceed) => {
  response.status(200).send("OK")
})

app.patch("/apl/list/edit", (request, response, proceed) => {
  response.status(200).send("OK")
})

app.patch("/apl/list/sort", (request, response, proceed) => {
  response.status(200).send("OK")
})

app.patch("/apl/list/moveAllOwnCards", (request, response, proceed) => {
  response.status(200).send("OK")
})

app.delete("/apl/list/destroy", (request, response, proceed) => {
  response.status(200).send("OK")
})

app.get("/api/card/project", (request, response, proceed) => {
  const body = CARD_PROJECT_REQUEST(request.body, {strict: true})
  const card = Card.one(body.id)

  response.status(200)
  response.send(card.project(body.projector))
})

app.post("/api/card/copy", (request, response, proceed) => {
  response.status(200).send("OK")
})

app.post("/api/card/create", (request, response, proceed) => {
  response.status(200).send("OK")
})

app.patch("/api/card/edit", (request, response, proceed) => {
  response.status(200).send("OK")
})

app.patch("/api/card/label", (request, response, proceed) => {
  response.status(200).send("OK")
})

app.patch("/api/card/move", (request, response, proceed) => {
  response.status(200).send("OK")
})

app.patch("/api/card/unlabel", (request, response, proceed) => {
  response.status(200).send("OK")
})

app.patch("/api/card/setLabels", (request, response, proceed) => {
  response.status(200).send("OK")
})

app.delete("/api/card/destroy", (request, response, proceed) => {
  response.status(200).send("OK")
})

app.get("/api/checklist/project", (request, response, proceed) => {
  const body = CHECKLIST_PROJECT_REQUEST(request.body, {strict: true})
  const checklist = Checklist.one(body.id)

  response.status(200)
  response.send(checklist.project(body.projector))
})

app.post("/api/checklist/create", (request, response, proceed) => {
  response.status(200).send("OK")
})

app.patch("/api/checklist/edit", (request, response, proceed) => {
  response.status(200).send("OK")
})

app.delete("/api/checklist/destroy", (request, response, proceed) => {
  response.status(200).send("OK")
})

app.get("/api/checkitem/project", (request, response, proceed) => {
  const body = CHECKITEM_PROJECT_REQUEST(request.body, {strict: true})
  const checkitem = Checkitem.one(body.id)

  response.status(200)
  response.send(checkitem.project(body.projector))
})

app.post("/api/checkitem/create", (request, response, proceed) => {
  response.status(200).send("OK")
})

app.patch("/api/checkitem/edit", (request, response, proceed) => {
  response.status(200).send("OK")
})

app.patch("/api/checkitem/move", (request, response, proceed) => {
  response.status(200).send("OK")
})

app.delete("/api/checkitem/destroy", (request, response, proceed) => {
  response.status(200).send("OK")
})

app.use((request, response, proceed) => {
  throw new Error(404, "Not Found")
})

app.use([
  (error, request, response, proceed) => {
    console.log(error)

    if ((
      error instanceof Error 
    ) && (
      [400, 401, 404].includes(error.statusCode)
    )) {
      response.status(error.statusCode)
      response.send(error.message)
    } else {
      response.status(500)
      response.send(STATUS_CODES[500])
    }
  }
])