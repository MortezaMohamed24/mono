import {Model} from "mongoose";
import Statics from "#models/user/statics/type";
import Methods from "#models/user/methods/type";
import Virtuals from "#models/user/virtuals/type";
import {UserDocumentType} from "#models/user/document";


interface UserModel extends Model<UserDocumentType, {}, Methods, Virtuals>, Statics {
  // Empty
}


export default UserModel;