import Model from "src/models/user/model/type";
import schema from "src/models/user/schema";
import Methods from "src/models/user/methods/type";
import mongoose from "mongoose";
import {UserDocument} from "src/models/user/document";
import {UserDocumentType} from "src/models/user/document";


type User = UserDocument;
const User = mongoose.model<UserDocumentType, Model, Methods>("User", schema);


export default User;