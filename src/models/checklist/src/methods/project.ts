import Checklist from "../Model.js"
import Projector from "../Projector.js"
import Projection from "../Projection.js"
import projectMany from "/projectMany"
import projectorDefault from "./projectorDefault.js"
import {ChecklistDocumentJSONWithDescendants} from "src/models/checklist/document"


async function project(this: Checklist): Promise<ChecklistDocumentJSONWithDescendants>
async function project(this: Checklist, {keys, checkitems}: Projector): Promise<Projection>
async function project(this: Checklist, {keys, checkitems}: Projector = projectorDefault): Promise<Projection> {
  const output: Projection = {}

  keys.includes("id") && (output.id = this.id)
  keys.includes("title") && (output.title = this.title)
  keys.includes("filter") && (output.filter = this.filter)
  keys.includes("idUser") && (output.idUser = this.idUser)
  keys.includes("idList") && (output.idList = this.idList)
  keys.includes("idCard") && (output.idCard = this.idCard)
  keys.includes("idBoard") && (output.idBoard = this.idBoard)

  checkitems && (output.checkitems = await projectMany(await this.checkitems(), checkitems))

  return output
}


export default project