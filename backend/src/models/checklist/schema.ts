import {Oid} from "#util/oid";
import {ALL} from "./fields/constants.js";
import Model from "./model/type.js";
import Methods from "./methods/type.js";
import statics from "./statics/index.js";
import methods from "./methods/index.js";
import getters from "./virtuals/getters.js";
import setters from "./accessors/setters.js";
import mongoose from "mongoose";
import DocumentType from "./document/documentType.js";


const schema = new mongoose.Schema<DocumentType, Model, Methods>({
  _id: {type: "ObjectID", require: true, default: () => new Oid()},
  title: {type: "String", required: true, set: setters.title},
  filter: {type: "String", required: true, default: ALL, set: setters.filter},
  idUser: {type: "ObjectID", required: true},
  idList: {type: "ObjectID", required: true},
  idCard: {type: "ObjectID", required: true},
  idBoard: {type: "ObjectID", required: true},
  idCheckitems: {type: ["ObjectID"], required: true, default: []},
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