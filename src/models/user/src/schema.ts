import {Oid} from "oid"
import statics from "./statics/index.js"
import methods from "./methods/index.js"
import setters from "./setters.js"
import {Schema} from "mongoose"
import {UserModel} from "./Model.js"
import {UserMethods} from "./Methods.js"
import {UserDocumentType} from "./DocumentType.js"


const schema = new Schema<UserDocumentType, UserModel, {}, UserMethods>({
  _id: {
    type: "ObjectID", 
    default: () => new Oid(),
  },

  username: {
    type: "String", 
    required: true,
  },

  password: {
    hash: {
      type: "String", 
      required: true,
    }, 
    salt: {
      type: "String", 
      required: true,
    },
  },

  avatar: {
    set: setters.avatar,
    type: "String", 
    default: null, 
  },

  idBoards: {
    type: ["ObjectID"], 
    default: [],
  },

  lastname: {
    set: setters.lastname,
    type: "String", 
    required: true, 
  },

  initials: {
    type: "String", 
    required: true,
  },

  firstname: {
    set: setters.firstname,
    type: "String", 
    required: true, 
  },
}, {id: true})

Object.entries(statics).forEach(([key, value]) => {
  schema.static(key, value)
})

Object.entries(methods).forEach(([key, value]) => {
  schema.method(key, value)
})


export {schema}
export default schema