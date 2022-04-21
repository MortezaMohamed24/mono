import {Oid} from "#util/oid";
import Model from "./model/type.js";
import DocType from "./document/documentType.js";
import Methods from "./methods/type.js";
import statics from "./statics/index.js";
import methods from "./methods/index.js";
import getters from "./virtuals/getters.js";
import setters from "./accessors/setters.js";
import mongoose from "mongoose";


const schema = new mongoose.Schema<DocType, Model, Methods>({
  _id: {type: "ObjectID", required: true, default: () => new Oid()},
  title: {type: "String", required: true, set: setters.title},
  idUser: {type: "ObjectID", required: true},
  idList: {type: "ObjectID", required: true},
  idBoard: {type: "ObjectID", required: true},
  dateDue: {type: "Number", required: true, default: null},
  idLabels: {type: ["ObjectID"], default: [], required: true},
  dateStart: {type: "Number", required: true, default: null},
  isWatched: {type: "Boolean", default: false, required: true},
  isComplete: {type: "Boolean", default: false, required: true},
  description: {type: "String", required: false},
  idChecklists: {type: ["ObjectID"], default: [], required: true},
  dateCreation: {type: "Number", required: true, default: () => Date.now(), immutable: true},
  dateLastView: {type: "Number", default: null, required: false},
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


export default schema;