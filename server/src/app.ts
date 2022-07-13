import Auth from "authenticator"
import PATH from "node:path"
import HTTP from "node:http"
import morgan from "morgan"
import session from "express-session"
import express from "express"
import {Error} from "./Error.js"
import {User} from "./models/User/User.js"
import {List} from "./models/List/List.js"
import {Card} from "./models/Card/Card.js"
import {Board} from "./models/Board/Board.js"
import {Label} from "./models/Label/Label.js"
import verifyAuth from "./verifyAuth.js"
import {Virtuals} from "./Virtuals.js"
import {Checkitem} from "./models/Checkitem/Checkitem.js"
import {Checklist} from "./models/Checklist/Checklist.js"
import {URLToDirname} from "./util/URLToDirname.js"
import {STATUS_CODES} from "http"
import {JSONQueryParser} from "./JSONQueryParser.js"
import {USER_PROJECT_REQUEST} from "./models/User/UserProjectRequestType.js"
import {LIST_PROJECT_REQUEST} from "./models/List/ListProjectRequestType.js"
import {CARD_PROJECT_REQUEST} from "./models/Card/CardProjectRequestType.js"
import {BOARD_PROJECT_REQUEST} from "./models/Board/BoardProjectRequestType.js"
import {LABEL_PROJECT_REQUEST} from "./models/Label/LableProjectRequestType.js"
import {CHECKLIST_PROJECT_REQUEST} from "./models/Checklist/ChecklistProjectRequestType.js"
import {CHECKITEM_PROJECT_REQUEST} from "./models/Checkitem/CheckitemProjectRequestType.js"


const app = express()
const PORT = 3000
const server = HTTP.createServer(app)


app.use(morgan(
  "common"
))

app.use(express.json({
  type: "application/json"
}))

app.use(express.urlencoded({
  extended: false,
}))

app.use(Virtuals({
  base: PATH.join(URLToDirname(import.meta.url), "../../web/dist"),
  paths: [
    // "/"
    [/^\/$/, "/index.html"], 
    // "/home"
    [/^\/home?$/, "/index.html"], 
    // "/cards/idCard"
    [/^\/cards\/[\w-]+$/, "/index.html"], 
    // "/boards/idBoard"
    [/^\/boards\/[\w-]+$/, "/index.html"], 
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

app.use(express.static(
  PATH.join(
    URLToDirname(import.meta.url), 
    "../../web/dist",
  ),
))

app.use(session({
  secret: "Cat",
  resave: false,
  cookie: {maxAge: 1000 * 60 * 60 * 24 * 15},
  saveUninitialized: true,
}))

app.use(Auth.Manager<User>((user) => (
  user.id.toString()
)))

app.use(Auth.Session<User>((idUser) => (
  User.items.find(user => user.id === idUser) ?? null
)))


app.post("/auth/login", Auth.Local({
  verify: verifyAuth,
  usernameKey: "username",
  passwordKey: "password",
  unknownUserMessage: "AUTH: UNKNOWN_USER",
  badUsernameMessage: "AUTH: BAD_USERNAME",
  badPasswordMessage: "AUTH: BAD_PASSWORD",
  missingUsernameMessage: "AUTH: MISSING_USERNAME",
  missingPasswordMessage: "AUTH: MISSING_PASSWORD",
  incorrectPasswoedMessage: "AUTH: INCORRECT_PASSWORD",
  missingCredentialsMessage: "AUTH: MISSING_CREDINTAILS",
}))

app.post("/auth/login", (req, res, proceed) => {
  if (req.AUTH.authenticated) {
    res.status(200)
    res.send("OK")
  }
})

app.get("/auth/status", (request, response, proceed) => {
  response.send({
    authenticated: request.AUTH.authenticated
  })
})


app.post("/api/users/create", (request, response, proceed) => {
  response.status(200).send("OK")
})

app.use(Auth.Check({
  action: "responde",
}))

app.get("/api/users/project", (
  JSONQueryParser(USER_PROJECT_REQUEST)
))

app.get("/api/users/project", (request, response, proceed) => {
  console.log(JSON.stringify(request.query.projector, null, 2))
  response.status(200)
  response.send(request.AUTH.user!.project(request.query.projector as any))
})

app.patch("/api/users/edit", (request, response, proceed) => {
  response.status(200).send("OK")
})

app.delete("/api/users/destroy", (request, response, proceed) => {
  response.status(200).send("OK")
})

app.get("/api/boards/project", (request, response, proceed) => {
  const body = BOARD_PROJECT_REQUEST(request.body, {strict: true})
  const board = Board.one(body.id)

  response.status(200)
  response.send(board.project(body.projector as any))
})

app.post("/api/boards/create", (request, response, proceed) => {
  response.status(200).send("OK")
})

app.patch("/api/boards/edit", (request, response, proceed) => {
  response.status(200).send("OK")
})

app.delete("/api/boards/destroy", (request, response, proceed) => {
  response.status(200).send("OK")
})

app.get("/api/labels/project", (request, response, proceed) => {
  const body = LABEL_PROJECT_REQUEST(request.body, {strict: true})
  const label = Label.one(body.id)

  response.status(200)
  response.send(label.project(body.projector as any))
})

app.post("/api/labels/create", (request, response, proceed) => {
  response.status(200).send("OK")
})

app.patch("/api/labels/edit", (request, response, proceed) => {
  response.status(200).send("OK")
})

app.delete("/api/labels/destroy", (request, response, proceed) => {
  response.status(200).send("OK")
})

app.get("/api/lists/project", (request, response, proceed) => {
  const body = LIST_PROJECT_REQUEST(request.body, {strict: true})
  const list = List.one(body.id)

  response.status(200)
  response.send(list.project(body.projector as any))
})

app.post("/api/lists/copy", (request, response, proceed) => {
  response.status(200).send("OK")
})

app.post("/api/lists/create", (request, response, proceed) => {
  response.status(200).send("OK")
})

app.post("/api/lists/copyAllOwnCards", (request, response, proceed) => {
  response.status(200).send("OK")
})

app.patch("/api/lists/move", (request, response, proceed) => {
  response.status(200).send("OK")
})

app.patch("/api/lists/edit", (request, response, proceed) => {
  response.status(200).send("OK")
})

app.patch("/api/lists/sort", (request, response, proceed) => {
  response.status(200).send("OK")
})

app.patch("/api/lists/moveAllOwnCards", (request, response, proceed) => {
  response.status(200).send("OK")
})

app.delete("/api/lists/destroy", (request, response, proceed) => {
  response.status(200).send("OK")
})

app.get("/api/cards/project", (request, response, proceed) => {
  const body = CARD_PROJECT_REQUEST(request.body, {strict: true})
  const card = Card.one(body.id)

  response.status(200)
  response.send(card.project(body.projector as any))
})

app.post("/api/cards/copy", (request, response, proceed) => {
  response.status(200).send("OK")
})

app.post("/api/cards/create", (request, response, proceed) => {
  response.status(200).send("OK")
})

app.patch("/api/cards/edit", (request, response, proceed) => {
  response.status(200).send("OK")
})

app.patch("/api/cards/label", (request, response, proceed) => {
  response.status(200).send("OK")
})

app.patch("/api/cards/move", (request, response, proceed) => {
  response.status(200).send("OK")
})

app.patch("/api/cards/unlabel", (request, response, proceed) => {
  response.status(200).send("OK")
})

app.patch("/api/cards/setLabels", (request, response, proceed) => {
  response.status(200).send("OK")
})

app.delete("/api/cards/destroy", (request, response, proceed) => {
  response.status(200).send("OK")
})

app.get("/api/checklists/project", (request, response, proceed) => {
  const body = CHECKLIST_PROJECT_REQUEST(request.body, {strict: true})
  const checklist = Checklist.one(body.id)

  response.status(200)
  response.send(checklist.project(body.projector as any))
})

app.post("/api/checklists/create", (request, response, proceed) => {
  response.status(200).send("OK")
})

app.patch("/api/checklists/edit", (request, response, proceed) => {
  response.status(200).send("OK")
})

app.delete("/api/checklists/destroy", (request, response, proceed) => {
  response.status(200).send("OK")
})

app.get("/api/checkitems/project", (request, response, proceed) => {
  const body = CHECKITEM_PROJECT_REQUEST(request.body, {strict: true})
  const checkitem = Checkitem.one(body.id)

  response.status(200)
  response.send(checkitem.project(body.projector as any))
})

app.post("/api/checkitems/create", (request, response, proceed) => {
  response.status(200).send("OK")
})

app.patch("/api/checkitems/edit", (request, response, proceed) => {
  response.status(200).send("OK")
})

app.patch("/api/checkitems/move", (request, response, proceed) => {
  response.status(200).send("OK")
})

app.delete("/api/checkitems/destroy", (request, response, proceed) => {
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

server.on("error", (error) => { 
  throw error 
})

server.on("listening", () => { 
  console.log(`Server: Listening on port: ${PORT}`) 
})

server.listen(PORT)


import "./data/bluemoon.js"