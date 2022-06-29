import {model} from "mongoose"
import {Model} from "mongoose"
import {schema} from "./schema.js"
import {UserMethods} from "./Methods.js"
import {UserStatics} from "./Statics.js"
import {UserDocument} from "./Document.js"
import {UserDocumentType} from "./DocumentType.js"


export type UserModel = (
  & Model<UserDocumentType, {}, UserMethods>
  & UserStatics
)

export type User = (
  UserDocument
)

export const User = (
  model<UserDocumentType, UserModel, UserMethods>("User", schema)
)


export default User