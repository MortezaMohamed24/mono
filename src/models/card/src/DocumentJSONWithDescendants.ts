import {Oid} from "format"
import {ChecklistDocumentJSONWithDescendants} from "checklist"


export interface CardDocumentJSONWithDescendants {
  id: Oid
  title: string
  idUser: Oid
  idList: Oid
  idBoard: Oid
  dateDue: number | null
  idLabels: Oid[]
  dateStart: number | null
  isWatched: boolean
  checklists: ChecklistDocumentJSONWithDescendants[]
  isComplete: boolean
  description: string | null
  dateCreation: number
  dateLastView: number | null
}


export default CardDocumentJSONWithDescendants