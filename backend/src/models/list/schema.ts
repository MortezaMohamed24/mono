import {Oid} from "#util/oid";
import Model from "./model/type.js";
import setters from "./accessors/setters.js";
import getters from "./virtuals/getters.js";
import Methods from "./methods/type.js";
import methods from "./methods/index.js";
import statics from "./statics/index.js";
import mongoose from "mongoose";
import DocumentType from "./document/documentType.js";
import {DATE_CREATED_ASCENDING} from "./fields/constants.js";


const schema = new mongoose.Schema<DocumentType, Model, Methods>({
  _id: {type: "ObjectID", default: () => new Oid()},
  title: {type: "String", required: true, set: setters.title},
  idUser: {type: "ObjectID", required: true},
  idBoard: {type: "ObjectID", required: true},
  idCards: {type: ["ObjectID"], default: []},
  isWatched: {type: "Boolean", default: false, set: setters.isWatched},
  sortMethod: {type: "String", default: DATE_CREATED_ASCENDING},
}, {id: false});

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