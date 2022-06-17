import mongoose from "mongoose"
import {Document} from "mongoose"


type Doc = Document
type Null = null | undefined
type AnyValue = Doc | Null | ArrayOfValues | ObjectOfValues
type ArrayOfValues = AnyValue[]
type ObjectOfValues = {[key: string]: AnyValue}


/**
 * Takes one or more of the following:
 * 
 * - null
 * - undefined
 * - Any document
 * - An array of any of the items in this list
 * - An object of any of the items in this list
 * 
 * It then finds the modified documents, saves them, and returns 
 * them (the modified ones only) in an array.
 */
const save = (...documents: AnyValue[]): Promise<Doc[]> => (
  saveMany(toFlatArray(documents))
)

const toFlatArray = (unknown: AnyValue): Doc[] => {
  if (
    unknown === null || 
    unknown === undefined 
  ) {
    return []
  } else if (Array.isArray(unknown)) {
    return unknown.flatMap(item => toFlatArray(item))
  } else if (unknown instanceof mongoose.Document) {
    return [unknown]
  } else {
    return toFlatArray(Object.values(unknown))
  }
}

const saveMany = (documents: Doc[]): Promise<Doc[]> => {
  const promises: Promise<Doc>[] = []

  for (let document of documents) {
    if (document) {
      if (document.isModified()) {
        promises.push(document.save())
      }
    }
  }

  return Promise.all(promises)
}


export {save}
export default save