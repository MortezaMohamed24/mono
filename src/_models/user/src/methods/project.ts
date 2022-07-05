import User from "../Model.js"
import Projector from "../Projector.js"
import Projection from "../Projection.js"
import {projectMany} from "model"
import {DEFAULT_USER_PROJECTOR} from "../DefaultProjector.js"
import {UserDocumentJSONWithDescendants} from "../DocumentJSONWithDescendants.js"


async function project(this: User): Promise<UserDocumentJSONWithDescendants>
async function project(this: User, projector: Projector): Promise<Projection>
async function project(this: User, {keys, lists, cards, boards, labels, checkitems, checklists}: Projector = DEFAULT_USER_PROJECTOR): Promise<UserDocumentJSONWithDescendants | Projection> {
  const output: Projection = {}

  keys.includes("id") && (output.id = this.id)
  keys.includes("avatar") && (output.avatar = this.avatar)
  keys.includes("username") && (output.username = this.getUsername())
  keys.includes("lastname") && (output.lastname = this.lastname)
  keys.includes("initials") && (output.initials = this.initials)
  keys.includes("firstname") && (output.firstname = this.firstname)

  lists && (output.lists = await projectMany(await this.lists(), lists))
  cards && (output.cards = await projectMany(await this.cards(), cards))
  boards && (output.boards = await projectMany(await this.boards(), boards))
  labels && (output.labels = await projectMany(await this.labels(), labels))
  checklists && (output.checklists = await projectMany(await this.checklists(), checklists))
  checkitems && (output.checkitems = await projectMany(await this.checkitems(), checkitems))

  return output
}


export {project}
export default project