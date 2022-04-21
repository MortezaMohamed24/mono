import Model from "./type.js";
import schema from "#models/board/schema";
import Methods from "#models/board/methods/type";
import mongoose from "mongoose";
import {BoardDocument} from "#models/board/document";
import {BoardDocumentType} from "#models/board/document";


type Board = BoardDocument;
const Board = mongoose.model<BoardDocumentType, Model, Methods>("Board", schema);


export default Board;