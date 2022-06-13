import crud from "src/models/util/crud";
import User from "src/models/user";
import UserMethods from "src/models/user/methods/type";
import UserVirtuals from "src/models/user/virtuals/type";
import {UserDocumentType} from "src/models/user/document";


const ur = crud<UserMethods, UserVirtuals, UserDocumentType>("user", User);


export default ur;