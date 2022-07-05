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

app.use((request, response, proceed) => {
  console.log(request.AUTH)
  proceed()
})

app.use(Auth.Local({
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

app.get("/auth/status", (request, response, proceed) => {
  response.send({
    authenticated: request.AUTH.authenticated
  })
})

app.get("/login/status", (request, response, proceed) => {
  response.send({
    isAuthorized: request.AUTH.authenticated
  })
})

app.post("/api/user/create", (request, response, proceed) => {
  response.status(200).send("OK")
})

app.use(Auth.Check({
  action: "responde",
}))

app.get("/api/user/project", (request, response, proceed) => {
  const body = USER_PROJECT_REQUEST(request.body, {strict: true})
  const user = User.one(body.id)

  response.status(200)
  response.send(user.project(body.projector as any))
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
  response.send(board.project(body.projector as any))
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
  response.send(label.project(body.projector as any))
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
  const body = LIST_PROJECT_REQUEST(request.body, {strict: true})
  const list = List.one(body.id)

  response.status(200)
  response.send(list.project(body.projector as any))
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
  response.send(card.project(body.projector as any))
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
  response.send(checklist.project(body.projector as any))
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
  response.send(checkitem.project(body.projector as any))
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

server.on("error", (error) => { 
  throw error 
})

server.on("listening", () => { 
  console.log(`Server: Listening on port: ${PORT}`) 
})

server.listen(PORT)