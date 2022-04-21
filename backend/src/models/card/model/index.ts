import Model from "./type.js";
import schema from "#models/card/schema";
import Methods from "#models/card/methods/type";
import mongoose from "mongoose";
import {CardDocument} from "#models/card/document";
import {CardDocumentType} from "#models/card/document";


type Card = CardDocument;
const Card = mongoose.model<CardDocumentType, Model, Methods>("Card", schema);


export default Card;