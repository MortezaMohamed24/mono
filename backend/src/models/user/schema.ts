import {Oid} from "#util/oid";
import Model from "./model/type.js";
import Methods from "./methods/type.js";
import statics from "./statics/index.js";
import methods from "./methods/index.js";
import setters from "./accessors/setters.js";
import getters from "./virtuals/getters.js";
import mongoose from "mongoose";
import DocumentType from "./document/documentType.js";


const schema = new mongoose.Schema<DocumentType, Model, Methods>({
  _id: {type: "ObjectID", required: true, default: () => new Oid()},
  username: {type: "String", required: true}, 
  password: {hash: {type: "String", required: true}, salt: {type: "String", required: true}}, 
  avatar: {type: "String", required: false, default: null, set: setters.avatar},
  idBoards: {type: ["ObjectID"], required: true, default: []},
  lastname: {type: "String", required: true, set: setters.lastname}, 
  initials: {type: "String", required: true, }, 
  firstname: {type: "String", required: true, set: setters.firstname},
}, {id: true});

Object.entries(statics).forEach(([key, value]) => {
  schema.static(key, value);
});

Object.entries(methods).forEach(([key, value]) => {
  schema.method(key, value);
});

Object.entries(getters).forEach(([key, value]) => {
  schema.virtual(key).get(value);
});


export default schema;