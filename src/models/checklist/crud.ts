import crud from "src/models/util/crud";
import Checklist from "src/models/checklist/model";
import ChecklistMethods from "src/models/checklist/methods/type";
import ChecklistVirtuals from "src/models/checklist/virtuals/type";
import ChecklistDocumentType from "src/models/checklist/document/documentType";


const ct = crud<ChecklistMethods, ChecklistVirtuals, ChecklistDocumentType>("Checklist", Checklist);


export default ct;