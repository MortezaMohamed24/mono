import {Oid} from "oid"
import setters from "./setters.js"
import methods from "./methods/index.js"
import statics from "./statics/index.js"
import {Schema} from "mongoose"
import {ListModel} from "./Model.js"
import {ListMethods} from "./Methods.js"
import {ListDocumentType} from "./DocumentType.js"
import {DATE_CREATED_ASCENDING} from "./constants.js"


const schema = new Schema<ListDocumentType, ListModel, {}, ListMethods>({
  _id: {type: "ObjectID", default: () => new Oid()},
  title: {type: "String", required: true, set: setters.title},
  idUser: {type: "ObjectID", required: true},
  idBoard: {type: "ObjectID", required: true},
  idCards: {type: ["ObjectID"], default: []},
  isWatched: {type: "Boolean", default: false, set: setters.isWatched},
  sortMethod: {type: "String", default: DATE_CREATED_ASCENDING},
}, {id: false})

Object.entries(statics).forEach(([key, value]) => {
  schema.static(key, value)
})

Object.entries(methods).forEach(([key, value]) => {
  schema.method(key, value)
})


export {schema}
export default schema