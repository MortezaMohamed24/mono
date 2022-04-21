import Model from "#models/user/model/type";
import schema from "#models/user/schema";
import Methods from "#models/user/methods/type";
import mongoose from "mongoose";
import {UserDocument} from "#models/user/document";
import {UserDocumentType} from "#models/user/document";


type User = UserDocument;
const User = mongoose.model<UserDocumentType, Model, Methods>("User", schema);


export default User;