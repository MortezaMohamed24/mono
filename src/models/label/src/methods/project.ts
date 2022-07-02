import Label from "label"
import Projector from "../Projector.js"
import Projection from "../Projection.js"
import {LabelDocumentJSON} from "../DocumentJSON.js"
import {DEFAULT_LABEL_PROJECTOR} from "../DefaultProjector.js"


async function project(this: Label): Promise<LabelDocumentJSON>
async function project(this: Label, {keys}: Projector): Promise<Projection>
async function project(this: Label, {keys}: Projector = DEFAULT_LABEL_PROJECTOR): Promise<LabelDocumentJSON | Projection> {
  const output: Projection = {}

  keys.includes("id") && (output.id = this.id)
  keys.includes("name") && (output.name = this.name)
  keys.includes("color") && (output.color = this.color)
  keys.includes("idUser") && (output.idUser = this.idUser)
  keys.includes("idBoard") && (output.idBoard = this.idBoard)

  return output
}


export default project