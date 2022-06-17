import v from "../../fields/validators"
import {Oid} from "oid"
import Checkitem from "src/models/checkitem"
import Checklist from "src/models/checklist"


interface Argument {
  id?: Oid | undefined
  content: Checkitem["content"]
  checklist: Checklist
  isComplete?: Checkitem["isComplete"] | undefined
}

async function make({id = new Oid(), content, isComplete = false, checklist}: Argument): Promise<Checkitem> {
  const checkitem = new Checkitem({
    id: id,
    content: v.content(content), 
    isComplete: !!isComplete,
  })


  await checkitem.attach(checklist)

  
  return checkitem
}


export default make