import {Oid} from "oid"
import {ALL} from "./constants.js"
import {ChecklistMethods} from "./Methods.js"
import statics from "./statics/index.js"
import methods from "./methods/index.js"
import setters from "./setters.js"
import {Schema} from "mongoose"
import {ChecklistModel} from "./Model.js"
import {ChecklistDocumentType} from "./DocumentType.js"


const schema = new Schema<ChecklistDocumentType, ChecklistModel, ChecklistMethods>({
  _id: {type: "ObjectID", default: () => new Oid()},
  title: {type: "String", required: true, set: setters.title},
  filter: {type: "String", default: ALL, set: setters.filter},
  idUser: {type: "ObjectID", required: true},
  idList: {type: "ObjectID", required: true},
  idCard: {type: "ObjectID", required: true},
  idBoard: {type: "ObjectID", required: true},
  idCheckitems: {type: ["ObjectID"], default: []},
}, {id: false})

Object.entries(statics).forEach(([key, value]) => {
  schema.static(key, value)
})

Object.entries(methods).forEach(([key, value]) => {
  schema.method(key, value)
})


export {schema}
export default schema