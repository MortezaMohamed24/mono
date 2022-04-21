import v from "../fields/validators.js";
import Card from "../model/index.js";


export function title(this: Card, title: Card["title"]): Card["title"] {
  return v.title(title); 
}

export function dateDue(this: Card, dateDue: Card["dateDue"]): Card["dateDue"] {
  dateDue = v.dateDue(dateDue);

  if (this.dateStart !== null && dateDue !== null && this.dateStart > dateDue) {
    this.dateStart = dateDue;
  }
  
  if (dateDue === null && this.dateStart === null) {
    this.isComplete = false;
  }

  return dateDue;
}

export function dateStart(this: Card, dateStart: Card["dateStart"]): Card["dateStart"] {
  dateStart = v.dateStart(dateStart);
  
  if (dateStart !== null && this.dateDue !== null && dateStart > this.dateDue) {
    this.dateDue = dateStart;
  }

  if (dateStart === null && this.dateDue === null) {
    this.isComplete = false;
  }

  return dateStart;
}

export function isWatched(this: Card, isWatched: Card["isWatched"]): Card["isWatched"] {
  return v.isWatched(isWatched);
}

export function isComplete(this: Card, isComplete: Card["isComplete"]): Card["isComplete"] {
  if (this.dateStart !== null || this.dateDue !== null) {
    return v.isComplete(isComplete);
  } else {
    return this.isComplete;
  }
}

export function description(this: Card, description: Card["description"]): Card["description"] {
  return v.description(description);
}


export default Object.freeze({
  title,
  dateDue,
  dateStart,
  isWatched,
  isComplete,
  description,
});