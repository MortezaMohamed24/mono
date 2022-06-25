import {Request} from "./Request.js"
import {Response} from "./Response.js"
import {Application} from "./Application.js"


export interface Express extends Application {
  request: Request
  response: Response
}


export default Express