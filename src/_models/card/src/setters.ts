import Card from "./Model.js"
import types from "./fields/types.js"


export function title(this: Card, title: Card["title"]): Card["title"] {
  return types.title(title, {strict: true}) 
}

export function dateDue(this: Card, dateDue: Card["dateDue"]): Card["dateDue"] {
  dateDue = types.dateDue(dateDue, {strict: true})

  if (this.dateStart !== null && dateDue !== null && this.dateStart > dateDue) {
    this.dateStart = dateDue
  }
  
  if (dateDue === null && this.dateStart === null) {
    this.isComplete = false
  }

  return dateDue
}

export function dateStart(this: Card, dateStart: Card["dateStart"]): Card["dateStart"] {
  dateStart = types.dateStart(dateStart, {strict: true})
  
  if (dateStart !== null && this.dateDue !== null && dateStart > this.dateDue) {
    this.dateDue = dateStart
  }

  if (dateStart === null && this.dateDue === null) {
    this.isComplete = false
  }

  return dateStart
}

export function isWatched(this: Card, isWatched: Card["isWatched"]): Card["isWatched"] {
  return types.isWatched(isWatched, {strict: true})
}

export function isComplete(this: Card, isComplete: Card["isComplete"]): Card["isComplete"] {
  if (this.dateStart !== null || this.dateDue !== null) {
    return types.isComplete(isComplete, {strict: true})
  } else {
    return this.isComplete
  }
}

export function description(this: Card, description: Card["description"]): Card["description"] {
  return types.description(description, {strict: true})
}


export default Object.freeze({
  title,
  dateDue,
  dateStart,
  isWatched,
  isComplete,
  description,
})