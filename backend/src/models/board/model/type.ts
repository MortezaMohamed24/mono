import {Model} from "mongoose";
import Statics from "#models/board/statics/type";
import Methods from "#models/board/methods/type";
import Virtuals from "#models/board/virtuals/type";
import {BoardDocumentType} from "#models/board/document";


export interface BoardModel extends Model<BoardDocumentType, {}, Methods, Virtuals>, Statics {
  // Empty
}


export default BoardModel;