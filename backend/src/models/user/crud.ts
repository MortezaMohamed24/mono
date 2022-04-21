import crud from "#models/util/crud";
import User from "#models/user";
import UserMethods from "#models/user/methods/type";
import UserVirtuals from "#models/user/virtuals/type";
import {UserDocumentType} from "#models/user/document";


const ur = crud<UserMethods, UserVirtuals, UserDocumentType>("user", User);


export default ur;