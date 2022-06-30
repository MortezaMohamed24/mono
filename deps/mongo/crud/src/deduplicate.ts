import {Oid} from "oid"


/** 
 * Removes duplicate ids
*/
export function deduplicate(ids: Oid[]) {
  const clean: Oid[] = []

  for (let id of ids) {
    if (!clean.includes(id)) {
      clean.push(id)
    }
  }

  return clean
}


export default deduplicate