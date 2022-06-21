import "../mongo/client.js"
import "../passport/initialize.js"

import on404 from "./on404.js"
import logger from "morgan"
import onError from "./onError"
import express from "express"
import session from "src/ExpressSession/session"
import statics from "#middleware/statics"
import passport from "passport"
import UserRouter from "src/models/user/api/router"
import ListRouter from "src/models/list/api/router"
import CardRouter from "src/models/card/api/router"
import BoardRouter from "src/models/board/api/router"
import LabelRouter from "src/models/label/api/router"
import LoginRouter from "src/app/UserAuthorizerRoute"
import ChecklistRouter from "src/models/checklist/api/router"
import CheckitemRouter from "src/models/checkitem/api/router"


const app = express()


app.use(() => {

})

app.get(() => {})

app.use(logger("common"))
app.use(express.json())
app. use(express.urlencoded({extended: false}))

app.use(statics({
  base: "",
  const map: [RegExp, string][] = [[
    // if requesting "/"
    /^\/$/, 
    path.join(FRONTEND, "/index.html"),
  ], [
    // if requesting "/home"
    /^\/home?$/, 
    path.join(FRONTEND, "/index.html"),
  ], [
    // if requesting "/cards/idCard"
    /^\/cards\/\w+$/, 
    path.join(FRONTEND, "/index.html"),
  ], [
    // if requesting "/boards/idBoard"
    /^\/boards\/\w+$/, 
    path.join(FRONTEND, "/index.html"),
  ], [
    // if requesting "/login", "/login/index", or "/login/index.html"
    /^\/login(\/index(\.html)?)?$/, 
    path.join(FRONTEND, "/index.html"),
  ], [
    // if requesting "/login/error", "/login/error/index", or "/login/error/index.html"
    /^\/login\/error(\/index(\.html)?)?$/, 
    path.join(FRONTEND, "/index.html"),
  ], [
    // if requesting "/signup", "/signup/index", or "/signup/index.html"
    /^\/signup(\/index(\.html)?)?$/, 
    path.join(FRONTEND, "/index.html"),
  ], [
    // if requesting "/signup/error", "/signup/error/index", or "/signup/error/index.html"
    /^\/signup\/error(\/index(\.html)?)?$/, 
    path.join(FRONTEND, "/index.html"),
  ], [
    // if requesting "/main.bundle.js"
    /^\/main\.bundle\.js$/, 
    path.join(FRONTEND, "/main.bundle.js"),
  ]]  
}))

app.use(session())
app.use(passport.initialize({userProperty: "user"}))
app.use(passport.session())
app.use(LoginRouter)

app.use("/api/users", UserRouter)
app.use("/api/lists", ListRouter)
app.use("/api/cards", CardRouter)
app.use("/api/boards", BoardRouter)
app.use("/api/labels", LabelRouter)
app.use("/api/checklists", ChecklistRouter)
app.use("/api/checkitems", CheckitemRouter)


app.get("/ytryr:yt", (request, response) => {
  request.params.yt
})

app.post
app.use(on404)
app.use(onError)


export default app