import {Oid} from "oid"
import statics from "./statics/index.js"
import methods from "./methods/index.js"
import setters from "./setters.js"
import {Schema} from "mongoose"
import {CardModel} from "./Model.js"
import {CardMethods} from "./Methods.js"
import {CardDocumentType} from "./DocumentType.js"


const schema = new Schema<CardDocumentType, CardModel, CardMethods>({
  _id: {type: "ObjectID", default: () => new Oid()},
  title: {type: "String", required: true, set: setters.title},
  idUser: {type: "ObjectID", required: true},
  idList: {type: "ObjectID", required: true},
  idBoard: {type: "ObjectID", required: true},
  dateDue: {type: "Number", default: null},
  idLabels: {type: ["ObjectID"], default: [], required: true},
  dateStart: {type: "Number", default: null},
  isWatched: {type: "Boolean", default: false},
  isComplete: {type: "Boolean", default: false},
  description: {type: "String", default: null},
  idChecklists: {type: ["ObjectID"], default: []},
  dateCreation: {type: "Number", default: () => Date.now(), immutable: true},
  dateLastView: {type: "Number", default: null},
})

Object.entries(statics).forEach(([key, value]) => {
  schema.static(key, value)
})

Object.entries(methods).forEach(([key, value]) => {
  schema.method(key, value)
})


export {schema}
export default schema