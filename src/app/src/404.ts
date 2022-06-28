import app from "./app.js"
import {ServerError} from "errors"


app.use((request, response, proceed) => {
  throw new ServerError({
    status: 404, 
    message: "Not Found"    
  })
})