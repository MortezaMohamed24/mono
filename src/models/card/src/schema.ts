import {Oid} from "#util/oid"
import Model from "./model/type.js"
import DocType from "./document/documentType.js"
import Methods from "./methods/type.js"
import statics from "./statics/index.js"
import methods from "./methods/index.js"
import getters from "./virtuals/getters.js"
import setters from "./src/accessors/setters.js"
import mongoose from "mongoose"


const schema = new mongoose.Schema<DocType, Model, Methods>({
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

Object.entries(getters).forEach(([key, value]) => {
  schema.virtual(key).get(value)
})


export {schema}
export default schema