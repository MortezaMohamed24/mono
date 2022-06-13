import {Model} from "mongoose";
import Statics from "src/models/user/statics/type";
import Methods from "src/models/user/methods/type";
import Virtuals from "src/models/user/virtuals/type";
import {UserDocumentType} from "src/models/user/document";


interface UserModel extends Model<UserDocumentType, {}, Methods, Virtuals>, Statics {
  // Empty
}


export default UserModel;