import Model from "./type.js";
import schema from "../schema.js";
import Methods from "../methods/type.js";
import mongoose from "mongoose";
import {CheckitemDocument} from "../document/index.js";
import {CheckitemDocumentType} from "../document/index.js";


type Checkitem = CheckitemDocument;
const Checkitem = mongoose.model<CheckitemDocumentType, Model, Methods>("Checkitem", schema);


export default Checkitem;