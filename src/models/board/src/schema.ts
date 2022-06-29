import {Oid} from "#util/oid";
import Model from "./model/type.js";
import statics from "./statics/index.js";
import methods from "./methods/index.js";
import getters from "./virtuals/getters.js";
import setters from "./accessors/setters.js";
import Methods from "./methods/type.js";
import mongoose from "mongoose";
import DocumentType from "./document/documentType.js";


const schema = new mongoose.Schema<DocumentType, Model, Methods>({
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
});

Object.entries(statics).forEach(([key, value]) => {
  schema.static(key, value);
});

Object.entries(methods).forEach(([key, value]) => {
  schema.method(key, value);
});

Object.entries(getters).forEach(([key, value]) => {
  schema.virtual(key).get(value);
});


export {schema};
export default schema;