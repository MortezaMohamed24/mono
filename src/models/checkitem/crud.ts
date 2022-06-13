import crud from "src/models/util/crud";
import Checkitem from "src/models/checkitem/model";
import CheckitemMethods from "src/models/checkitem/methods/type";
import CheckitemVirtuals from "src/models/checkitem/virtuals/type";
import CheckitemDocumentType from "src/models/checkitem/document/documentType";


const cm = crud<CheckitemMethods, CheckitemVirtuals, CheckitemDocumentType>("checkitem", Checkitem);


export default cm;