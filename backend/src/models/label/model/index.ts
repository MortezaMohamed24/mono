import Model from "./type.js";
import schema from "#models/label/schema";
import Methods from "#models/label/methods/type";
import mongoose from "mongoose";
import {LabelDocument} from "#models/label/document";
import {LabelDocumentType} from "#models/label/document";


type Label = LabelDocument;
const Label = mongoose.model<LabelDocumentType, Model, Methods>("Label", schema);


export default Label;