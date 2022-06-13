import Model from "./type.js";
import schema from "src/models/card/schema";
import Methods from "src/models/card/methods/type";
import mongoose from "mongoose";
import {CardDocument} from "src/models/card/document";
import {CardDocumentType} from "src/models/card/document";


type Card = CardDocument;
const Card = mongoose.model<CardDocumentType, Model, Methods>("Card", schema);


export default Card;