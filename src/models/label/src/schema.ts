import {Oid} from "oid"
import statics from "./statics/index.js"
import methods from "./methods/index.js"
import setters from "./setters.js"
import {Schema} from "mongoose"
import {LabelModel} from "./Model.js"
import {LabelMethods} from "./Methods"
import {LabelDocumentType} from "./DocumentType.js"


const schema = new Schema<LabelDocumentType, LabelModel, LabelMethods>({
  _id: {type: "ObjectID", default: () => new Oid()},
  name: {type: "String", default: null, set: setters.name},
  color: {type: "String", required: true, set: setters.color},
  idUser: {type: "ObjectID", required: true},
  idBoard: {type: "ObjectID", required: true},
}, {id: false})

Object.entries(statics).forEach(([key, value]) => {
  schema.static(key, value)
})

Object.entries(methods).forEach(([key, value]) => {
  schema.method(key, value)
})


export {schema}
export default schema