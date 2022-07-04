import {LabelDocument} from "./Document.js"


export interface LabelProjectionType {
  id?: LabelDocument["id"]
  name?: LabelDocument["name"]
  color?: LabelDocument["color"]
  idUser?: LabelDocument["idUser"]
  idBoard?: LabelDocument["idBoard"]
}


export default LabelProjectionType