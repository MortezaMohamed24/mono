import {Oid} from "oid"
import setters from "./setters.js"
import methods from "./methods/index.js"
import statics from "./statics/index.js"
import {Schema} from "mongoose"
import {CheckitemModel} from "./Model.js"
import {CheckitemMethods} from "./Methods.js"
import {CheckitemDocumentType} from "./DocumentType.js"


const schema = new Schema<CheckitemDocumentType, CheckitemModel, CheckitemMethods>({
  _id: {type: "ObjectID", default: () => new Oid(), immutable: true},
  idUser: {type: "ObjectID", required: true},
  idList: {type: "ObjectID", required: true},
  idCard: {type: "ObjectID", required: true},
  idBoard: {type: "ObjectID", required: true},
  content: {type: "String", required: true, set: setters.content},
  isComplete: {type: "Boolean", default: false, set: setters.isComplete},
  idChecklist: {type: "ObjectID", required: true},
}, {id: false})

Object.entries(methods).forEach(([key, value]) => {
  schema.method(key, value)
})

Object.entries(statics).forEach(([key, value]) => {
  schema.static(key, value)
})


export {schema}
export default schema