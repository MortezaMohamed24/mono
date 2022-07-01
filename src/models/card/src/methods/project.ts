import Card from "card"
import Projector from "../Projector.js"
import Projection from "../Projection.js"
import {projectMany} from "model"
import projectorDefault from "../DefaultProjector.js"
import {CardDocumentJSONWithDescendants} from "../DocumentJSONWithDescendants.js"


async function project(this: Card): Promise<CardDocumentJSONWithDescendants>
async function project(this: Card, {keys, checklists, checkitems}: Projector): Promise<Projection>
async function project(this: Card, {keys, checklists, checkitems}: Projector = projectorDefault) {
  const output: Projection = {}

  keys.includes("id") && (output.id = this.id)
  keys.includes("url") && (output.url = this.url)
  keys.includes("title") && (output.title = this.title)
  keys.includes("idUser") && (output.idUser = this.idUser)
  keys.includes("idList") && (output.idList = this.idList)
  keys.includes("idBoard") && (output.idBoard = this.idBoard)
  keys.includes("dateDue") && (output.dateDue = this.dateDue)
  keys.includes("idLabels") && (output.idLabels = this.idLabels)
  keys.includes("dateStart") && (output.dateStart = this.dateStart)
  keys.includes("isWatched") && (output.isWatched = this.isWatched)
  keys.includes("isComplete") && (output.isComplete = this.isComplete)
  keys.includes("description") && (output.description = this.description)
  keys.includes("dateCreation") && (output.dateCreation = this.dateCreation)
  keys.includes("dateLastView") && (output.dateLastView = this.dateLastView)
  
  checklists && (output.checklists = await projectMany(await this.checklists(), checklists))
  checkitems && (output.checkitems = await projectMany(await this.checkitems(), checkitems))

  return output
}


export {project}
export default project