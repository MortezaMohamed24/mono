import crud from "src/models/util/crud"
import Board from "./model/index.js"
import BoardMethods from "./methods/type.js"
import BoardVirtuals from "./virtuals/type.js"
import {BoardDocumentType} from "./document/index.js"


const bd = crud<BoardMethods, BoardVirtuals, BoardDocumentType>("board", Board)


export default bd