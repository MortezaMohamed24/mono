import Model from "./type.js";
import schema from "src/models/label/schema";
import Methods from "src/models/label/methods/type";
import mongoose from "mongoose";
import {LabelDocument} from "src/models/label/document";
import {LabelDocumentType} from "src/models/label/document";


type Label = LabelDocument;
const Label = mongoose.model<LabelDocumentType, Model, Methods>("Label", schema);


export default Label;