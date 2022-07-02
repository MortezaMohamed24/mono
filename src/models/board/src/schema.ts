import {Oid} from "oid"
import methods from "./methods/index.js"
import setters from "./setters.js"
import statics from "./statics/index.js"
import {Schema} from "mongoose"
import {BoardModel} from "./Model.js"
import {BoardMethods} from "./Methods.js"
import {BoardDocumentType} from "./DocumentType.js"


const schema = new Schema<BoardDocumentType, BoardModel, BoardMethods>({
  _id: {type: "ObjectID", required: true, default: () => new Oid()},
  title: {type: "String", required: true, set: setters.title},
  theme: {type: "String", required: true, set: setters.theme},
  idUser: {type: "ObjectID", required: true},
  idLists: {type: ["ObjectID"], required: true, default: []},
  idLabels: {type: ["ObjectID"], required: true, default: []},
  isStarred: {type: "Boolean", required: true, default: false, set: setters.isStarred},
  dateCreation: {type: "Number", required: true, default: () => Date.now()},
  dateLastView: {type: "Number", default: null},
  dateLastActivity: {type: "Number", default: null},
})

Object.entries(methods).forEach(([key, value]) => {
  schema.method(key, value)
})

Object.entries(statics).forEach(([key, value]) => {
  schema.static(key, value)
})


export {schema}
export default schema