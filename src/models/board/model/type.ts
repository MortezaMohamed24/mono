import {Model} from "mongoose";
import Statics from "src/models/board/statics/type";
import Methods from "src/models/board/methods/type";
import Virtuals from "src/models/board/virtuals/type";
import {BoardDocumentType} from "src/models/board/document";


export interface BoardModel extends Model<BoardDocumentType, {}, Methods, Virtuals>, Statics {
  // Empty
}


export default BoardModel;