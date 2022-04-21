import crud from "#models/util/crud";
import Checkitem from "#models/checkitem/model";
import CheckitemMethods from "#models/checkitem/methods/type";
import CheckitemVirtuals from "#models/checkitem/virtuals/type";
import CheckitemDocumentType from "#models/checkitem/document/documentType";


const cm = crud<CheckitemMethods, CheckitemVirtuals, CheckitemDocumentType>("checkitem", Checkitem);


export default cm;