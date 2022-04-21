import v from "#models/checkitem/fields/validators";
import {Oid} from "#util/oid";
import Argument from "./argument.js";
import Checkitem from "#models/checkitem";


async function make({id = new Oid(), content, isComplete = false, checklist}: Argument) {
  const checkitem = new Checkitem({
    id: id,
    content: v.content(content), 
    isComplete: !!isComplete,
  });


  await checkitem.attach(checklist);

  
  return checkitem;
}


export default make;