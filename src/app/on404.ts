import {Request} from "express"
import ServerError from "server-error"


function on404(inbound: Request) {
  console.log({bath: inbound.path})

  throw new ServerError({
    status: 404, 
    message: "Not Found"    
  })
}


export default on404