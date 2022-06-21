import {Application} from "./Application.js"


export interface Express extends Application {
  request: Request
  response: Response
}


export default Express