import crud from "src/models/util/crud";
import List from "./model/index.js";
import ListMethods from "./methods/type.js";
import ListVirtuals from "./virtuals/type.js";
import {ListDocumentType} from "./document/index.js";


const lt = crud<ListMethods, ListVirtuals, ListDocumentType>("list", List);


export default lt;