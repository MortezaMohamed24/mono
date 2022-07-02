import List from "../Model.js"
import Projector from "../Projector.js"
import Projection from "../Projection.js"
import {projectMany} from "model"
import {DEFAULT_LIST_PROJECTOR} from "../DefaultProjector.js"
import {ListDocumentJSONWithDescendants} from "../DocumentJSONWithDescendants.js"


async function project(this: List): Promise<ListDocumentJSONWithDescendants>
async function project(this: List, {keys, cards, checklists, checkitems}: Projector): Promise<Projection>
async function project(this: List, {keys, cards, checklists, checkitems}: Projector = DEFAULT_LIST_PROJECTOR): Promise<Projection> {
  const output: Projection = {}

  keys.includes("id") && (output.id = this.id)
  keys.includes("title") && (output.title = this.title)
  keys.includes("idUser") && (output.idUser = this.idUser)
  keys.includes("idBoard") && (output.idBoard = this.idBoard)
  keys.includes("isWatched") && (output.isWatched = this.isWatched)
  keys.includes("sortMethod") && (output.sortMethod = this.sortMethod)

  cards && (output.cards = await projectMany(await this.cards(), cards))
  checklists && (output.checklists = await projectMany(await this.checklists(), checklists))
  checkitems && (output.checkitems = await projectMany(await this.checkitems(), checkitems))
  
  return output
}


export {project}
export default project