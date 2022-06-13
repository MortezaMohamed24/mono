import Model from "./type.js";
import schema from "../schema.js";
import Methods from "../methods/type.js";
import mongoose from "mongoose";
import {ChecklistDocument} from "../document/index.js";
import {ChecklistDocumentType} from "../document/index.js";


type Checklist = ChecklistDocument;
const Checklist = mongoose.model<ChecklistDocumentType, Model, Methods>("Checklist", schema);


export default Checklist;