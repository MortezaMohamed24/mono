import Model from "./type.js";
import schema from "src/models/board/schema";
import Methods from "src/models/board/methods/type";
import mongoose from "mongoose";
import {BoardDocument} from "src/models/board/document";
import {BoardDocumentType} from "src/models/board/document";


type Board = BoardDocument;
const Board = mongoose.model<BoardDocumentType, Model, Methods>("Board", schema);


export default Board;