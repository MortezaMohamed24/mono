import Checkitem from "src/models/checkitem"
import Projector from "../Projector.js"
import Projection from "../Projection.js"
import DEFAULT_PROJECTOR from "../default-projector.js"


async function project(this: Checkitem, {keys}: Projector = DEFAULT_PROJECTOR): Promise<Projection> {
  const output: Projection = {}

  keys.includes("id") && (output.id = this.id)
  keys.includes("idUser") && (output.idUser = this.idUser)
  keys.includes("idList") && (output.idList = this.idList)
  keys.includes("idCard") && (output.idCard = this.idCard)
  keys.includes("idBoard") && (output.idBoard = this.idBoard)
  keys.includes("content") && (output.content = this.content)
  keys.includes("isComplete") && (output.isComplete = this.isComplete)
  keys.includes("idChecklist") && (output.idChecklist = this.idChecklist)
  
  return output
}


export default project