import app from "./app.js"
import Virtuals from "serve-virtual"


app.use(Virtuals({
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