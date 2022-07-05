import app from "./app.js"
import http from "node:http"
import {PORT} from "../../constants/origin.js"


const server = http.createServer(app)
  

server.on("error", (error) => { 
  throw error 
})

server.on("listening", () => { 
  console.log(`Server: Listening on port: ${PORT}`) 
})


server.listen(PORT)