import {Oid} from "oid"
import Model from "./Model.js"
import Methods from "./Statics.js"
import methods from "./methods/index.js"
import setters from "./accessors/setters.js"
import statics from "./statics/index.js"
import mongoose from "mongoose"
import DocumentType from "./DocumentType.js"
import virtualGetters from "./virtual-getters/index.js"


const schema = new mongoose.Schema<DocumentType, Model, Methods>({
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

Object.entries(virtualGetters).forEach(([key, value]) => {
  schema.virtual(key).get(value)
})


export {schema}
export default schema