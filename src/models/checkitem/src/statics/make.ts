import {Oid} from "oid"
import types from "../fields/types"
import Checkitem from "../Model.js"
import Checklist from "checklist"


type Arg = {
  id?: Oid | undefined
  content: Checkitem["content"]
  checklist: Checklist
  isComplete?: Checkitem["isComplete"] | undefined
}

const make = async ({id = new Oid(), content, isComplete = false, checklist}: Arg): Promise<Checkitem> => {
  const checkitem = new Checkitem({
    id: id,
    content: types.content(content, {strict: true}), 
    isComplete: !!isComplete,
  })


  await checkitem.attach(checklist)

  
  return checkitem
}


export {make}
export default make